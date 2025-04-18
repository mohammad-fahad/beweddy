import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import {
  generateActivationToken,
  generateIdToken,
  resetPasswordIdToken,
} from "../utils/token/index.js";
import { client } from "../lib/google.js";
import { nanoid } from "nanoid";
import Todo from "../models/Todo.js";
import PrivetRegistry from "../models/PrivetRegistry.js";
import Registry from "../models/Registry.js";
import Guest from "../models/Guest.js";
import Gift from "../models/Gift.js";
import Venue from "../models/Venue.js";
import { addNewCustomer, createSubscription } from "../lib/stripe.js";
import {
  sendActivationEmail,
  sendPasswordResetEmail,
  userActivationNotifyAdmin as userActivationNotifyToAdmin,
} from "./invitationControllers.js";
import {
  sendNewCoupleEmailToVenue,
  sendWelcomeEmailToCouple,
  sendWelcomeEmailToVenue,
} from "./mailControllers.js";

// Register New User

export const defaultLogo =
  "https://s3.amazonaws.com/unroll-images-production/projects%2F65513%2F1645970346044-Beweddy+Logo.png";

const defaultTodos = [
  {
    isComplete: true,
    description: "List No. 1; The Bride is Always Right",
  },
  {
    isComplete: true,
    description: "List No. 2; Buy A Beautiful & Expensive Wedding Dress.",
  },
  {
    isComplete: false,
    description: "Appointment with The Wedding Planner @HouseOffice At 9:30 AM",
  },
];

export const register = asyncHandler(async (req, res) => {
  const { email, password, questions, role, logo, businessName, websiteLink } =
    req.body;
  const { firstName, lastName, venueId } = questions;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const _name = questions.firstName
    ? `${questions.firstName}_${questions.spouseFirstName}`
    : questions.businessName;

  const username = `${_name}_${nanoid(4)}`.toLowerCase().replace(/\s/g, "");

  // Create new user
  const user = await User.create({
    firstName,
    lastName,
    email,
    // phone,
    password,
    questions: role === "venue" ? null : questions,
    username,
    venue: venueId && venueId,
    role,
  });

  if (user) {
    if (role === "venue") {
      const customer = await addNewCustomer({ email });
      await Venue.create({
        user: user._id,
        billingID: customer.id,
        ...questions,
      });
    }

    defaultTodos.forEach(async (todo) => {
      await Todo.create({
        user: user._id,
        ...todo,
      });
    });

    const activationToken = generateActivationToken(user._id);
    const url = `${process.env.CLIENT_URL}/activation/${activationToken}`;
    const _venue = await Venue.findById(venueId);

    await sendActivationEmail(
      _venue?.logo?.secure_url ? _venue?.logo?.secure_url : defaultLogo,
      email,
      url,
      role
    );

    if (venueId) {
      const findVenue = await Venue.findById(venueId).populate("user");
      if (findVenue) {
        await sendNewCoupleEmailToVenue({
          logo: findVenue?.logo?.secure_url || defaultLogo,
          email: findVenue.user.email,
          venueName: findVenue.businessName,
          websiteURL: `${process.env.CLIENT_URL}/couple/${user.username}`,
        });
      }
    }

    res
      .status(201)
      .json({ message: `Account activation email has sent to ${email}` });
  }
});

// export const verifyEmail = asyncHandler(async (req, res) => {
//   const { email, phone, password, questions, role } = req.body;
//   const activationToken = generateActivationToken(user._id);
//   const url = `${process.env.CLIENT_URL}/activation/${activationToken}`;
//   await sendActivationEmail(user.fullName, email, url);

//   if (user) {
//     res
//       .status(201)
//       .json({ message: `Account activation email has sent to ${email}` });
//   }
// });

// Active User

export const googleSignUp = asyncHandler(async (req, res) => {
  const { idToken, questions, role } = req.body;

  // Push all GiftCards & Registries to user

  const gifts = await Gift.find({});
  // const registries = await Registry.find({}).select('_id');

  const giftCards = gifts
    .filter((gift) => gift.isRecommended)
    .map((gift) => gift._id);

  // const registryCards = registries.map(registry => registry._id);

  // Verify Google ID token
  const verify = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  // By Google
  const { email, email_verified, picture } = verify.payload;

  const { firstName, lastName, venueId } = questions;

  // Check if email is verified
  if (email_verified) {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const _name = questions.firstName
      ? `${questions.firstName}_${questions.spouseFirstName}`
      : questions.businessName;

    const username = `${_name}_${nanoid(4)}`.toLowerCase().replace(/\s/g, "");
    // If not user exists then create new user
    const userCreated = await User.create({
      firstName,
      lastName,
      email,
      password: email + process.env.GOOGLE_CLIENT_ID,
      avatar: picture,
      emailVerified: email_verified,
      username,
      questions: role === "venue" ? null : questions,
      giftCards,
      venue: venueId && venueId,
      role,
      // registries: registryCards,
    });
    const newGuest = {
      address: {
        city: "Optio quasi labore ",
        providence: "Consequuntur facilis",
        state: "Vel veniam qui est ",
        street: "Laudantium veniam ",
        zip: "21268",
      },
      callingCode: "1",
      email: "example@example.com",
      guestEstimate: "10",
      id: "61462f3aef64f800048ebd65",
      name: "Example",
      phone: {
        number: "348450345",
        provider: {
          sms: "txt.att.net",
          mms: "mms.att.net",
        },
      },
      rsvp: "maybe",
      wayOfInvitations: {
        allAbove_invite: false,
        email_invite: true,
        mail_invite: true,
        text_invite: true,
      },
    };

    const URL = `${process.env.CLIENT_URL}/login`;
    let venue;
    if (userCreated) {
      if (role === "venue") {
        const customer = await addNewCustomer({ email });
        venue = await Venue.create({
          user: userCreated._id,
          billingID: customer.id,
          ...questions,
        });

        if (venue.plan === "none") {
          const session = await createSubscription(
            venue.billingID,
            process.env.PREMIUM_PLAN_ID,
            URL
          );

          const url = `${process.env.CLIENT_URL}/create-website?step=1&venueId=${venue._id}`;

          await userActivationNotifyToAdmin({
            name: venue.businessName,
            email,
            role: userCreated.role,
            customWebsite: venue.customWebsite,
            url,
          });

          await sendWelcomeEmailToVenue({
            link: url,
            email,
            logo: venue?.logo?.secure_url,
          });

          if (session) {
            return res.status(200).json({ url: session.url });
          }
        }
      }

      defaultTodos.forEach(async (todo) => {
        await Todo.create({
          user: userCreated._id,
          ...todo,
        });
      });
      await Guest.create({
        user: userCreated._id,
        ...newGuest,
      });

      const privetRegistries = await PrivetRegistry.find({
        user: userCreated._id,
      });

      const user = await User.findOne({
        _id: userCreated._id,
      })
        .populate("giftCards")
        .populate("registries")
        .populate("venue", "businessName logo websiteLink");

      const name = user.role === "venue" ? venue.businessName : user.fullName;

      await userActivationNotifyToAdmin({
        name,
        email: user?.email,
        role: user?.role,
      });

      if (user.role === "couple") {
        await sendWelcomeEmailToCouple({
          email: user.email,
          logo: user.venue ? user.venue?.logo?.secure_url : defaultLogo,
        });
      }

      // await sendWelcomeEmailToCouple({ email: user.email,logo: user.veneu.logo.secure_url });

      if (venueId) {
        const findVenue = await Venue.findById(venueId).populate("user");
        if (findVenue) {
          await sendNewCoupleEmailToVenue({
            logo: findVenue?.logo?.secure_url || defaultLogo,
            email: findVenue.user.email,
            venueName: findVenue.businessName,
            websiteURL: `${process.env.CLIENT_URL}/couple/${user.username}`,
          });
        }
      }
      res.json({
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          fullName: venue ? venue.businessName : user.fullName,
          coupleName: user.coupleName,
          username: user.username,
          email: user.email,
          phone: user.phone,
          questions: user.questions,
          avatar: user.avatar,
          ourStory: user.ourStory,
          qrCode: user.qrCode,
          qrCodeAvatar: user.qrCodeAvatar,
          receptionDetails: user.receptionDetails,
          giftCards: user.giftCards,
          registries: privetRegistries,
          socialAccounts: user.socialAccounts,
          weddingVideo: user.weddingVideo,
          weddingVideoTitle: user.weddingVedioTitle,
          isAdmin: user.isAdmin,
          role: user.role,
          venue: user.role === "venue" ? venue : user.venue, //!
          token: generateIdToken(user._id),
        },
        message: `Welcome to Beweddy, ${user.fullName}`,
      });
    }
  } else {
    res.status(400);
    throw new Error("Google sign up failed, Email is not verified");
  }
});

export const googleSignIn = asyncHandler(async (req, res) => {
  const { idToken } = req.body;
  const URL = `${process.env.CLIENT_URL}/login`;

  // Verify Google ID token
  const verify = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  // By Google
  const { email, email_verified } = verify.payload;

  // Check if email is verified
  if (email_verified) {
    const user = await User.findOne({ email })
      // .populate('registries')
      .populate("giftCards")
      .populate("venue", "businessName logo websiteLink");

    if (!user) {
      res.status(404);
      throw new Error("Please sign up we did not recognize this email");
    }

    const privetRegistries = await PrivetRegistry.find({ user: user._id });

    const venue = await Venue.findOne({ user: user._id });

    if (user.role === "venue") {
      if (venue.plan === "none") {
        const session = await createSubscription(
          venue.billingID,
          process.env.PREMIUM_PLAN_ID,
          URL
        );

        if (session) {
          return res.status(200).json({ url: session.url });
        }
      }
    }

    res.json({
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        coupleName: user.coupleName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        questions: user.questions,
        avatar: user.avatar,
        location: user.location,
        ourStory: user.ourStory,
        qrCode: user.qrCode,
        qrCodeAvatar: user.qrCodeAvatar,
        receptionDetails: user.receptionDetails,
        giftCards: user.giftCards,
        registries: privetRegistries ? privetRegistries : [],
        socialAccounts: user.socialAccounts,
        weddingVideo: user.weddingVideo,
        weddingVideoTitle: user.weddingVedioTitle,
        isAdmin: user.isAdmin,
        role: user.role,
        venue: user.role === "venue" ? venue : user.venue, //!
        token: generateIdToken(user._id),
      },
      message: `Welcome back ${venue ? venue.businessName : user.fullName}`,
      redirect: user.role === "venue" ? true : false,
    });
  } else {
    res.status(400);
    throw new Error("Google sign up failed, Email is not verified");
  }
});

export const activeUser = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const URL = `${process.env.CLIENT_URL}/activation/${token}`;
  // Push all GiftCards & Registries to user

  const gifts = await Gift.find({});
  // const registries = await Registry.find({}).select('_id');

  const giftCards = gifts
    .filter((gift) => gift.isRecommended)
    .map((gift) => gift._id);

  // const registryCards = registries.map(registry => registry._id);

  // Decode token
  const decode = jwt.verify(token, process.env.JWT_SECRET);

  // Check if token is not valid
  if (!decode) {
    res.status(401);
    throw new Error("Activation token expired");
  }

  const id = decode.id;

  // Check if user exists
  const userExists = await User.findById(id);

  if (!userExists) {
    res.status(404);
    throw new Error("User not found");
  }

  const venue = await Venue.findOne({ user: id });

  if (userExists.role === "venue") {
    if (venue.plan === "none" || venue.plan === "") {
      const session = await createSubscription(
        venue.billingID,
        process.env.PREMIUM_PLAN_ID,
        URL
      );

      if (session) {
        return res.status(200).json({ url: session.url });
      }
    }
  }

  if (userExists.emailVerified) {
    res.status(400);
    throw new Error("Account already activated, please login");
  }

  userExists.emailVerified = true;
  userExists.giftCards = giftCards;
  // userExists.giftCards.push(giftCards);

  // userExists.registries.push(registryCards);

  const userUpdated = await userExists.save();
  const newGuest = {
    address: {
      city: "Optio quasi labore ",
      providence: "Consequuntur facilis",
      state: "Vel veniam qui est ",
      street: "Laudantium veniam ",
      zip: "21268",
    },
    callingCode: "1",
    email: "musa@example.com",
    guestEstimate: "10",
    id: "61462f3aef64f800048ebd65",
    name: "Example",
    phone: {
      number: "348450345",
      provider: {
        sms: "txt.att.net",
        mms: "mms.att.net",
      },
    },
    rsvp: "maybe",
    wayOfInvitations: {
      allAbove_invite: false,
      email_invite: true,
      mail_invite: true,
      text_invite: true,
    },
  };

  const user = await User.findOne({ email: userUpdated.email })
    .populate("registries")
    .populate("giftCards")
    .populate("venue", "businessName logo websiteLink");

  // Send response
  if (user) {
    const privetRegistries = await PrivetRegistry.find({ user: user._id });

    await Guest.create({
      user: user._id,
      ...newGuest,
    });
    const name = user.role === "venue" ? venue.businessName : user.fullName;
    const url =
      user.role === "venue"
        ? `${process.env.CLIENT_URL}/create-website?step=1&venueId=${venue._id}`
        : false;

    await userActivationNotifyToAdmin({
      name: name,
      email: user?.email,
      role: user?.role,
      customWebsite: venue?.customWebsite,
      url,
    });

    if (venue) {
      await sendWelcomeEmailToVenue({
        link: url,
        email: user?.email,
        logo: venue?.logo?.secure_url,
      });
    }

    if (user.role === "couple") {
      await sendWelcomeEmailToCouple({
        email: user.email,
        logo: user.venue ? user.venue?.logo?.secure_url : defaultLogo,
      });
    }

    res.status(201).json({
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        coupleName: user.coupleName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        location: user.location,
        questions: user.questions,
        avatar: user.avatar,
        ourStory: user.ourStory,
        qrCode: user.qrCode,
        qrCodeAvatar: user.qrCodeAvatar,
        receptionDetails: user.receptionDetails,
        giftCards: user.giftCards,
        registries: privetRegistries ? privetRegistries : [],
        socialAccounts: user.socialAccounts,
        weddingVideo: user.weddingVideo,
        weddingVideoTitle: user.weddingVedioTitle,
        isAdmin: user.isAdmin,
        role: user.role,
        venue: user.role === "venue" ? venue : user.venue,
        token: generateIdToken(user._id),
      },
      message: `Your account has been successfully activated!`,
      redirect: user.role === "venue" ? true : false,
    });
  }
});

// User Login

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })
    .populate("registries")
    .populate("giftCards")
    .populate("venue", "businessName logo websiteLink");

  if (!user) {
    res.status(404);
    throw new Error("Please sign up we did not recognize this email");
  }

  const URL = `${process.env.CLIENT_URL}/login`;
  const venue = await Venue.findOne({ user: user._id });

  if (!user.emailVerified) {
    const activationToken = generateActivationToken(user._id);
    const url = `${process.env.CLIENT_URL}/activation/${activationToken}`;
    await sendActivationEmail(
      user.venue.logo ? user.venue?.logo?.secure_url : defaultLogo,
      email,
      url
    );

    res.status(401);
    throw new Error(
      "Your account is not activated yet, please check your email"
    );
  }

  if (user.role === "venue") {
    if (venue.plan === "none") {
      const session = await createSubscription(
        venue.billingID,
        process.env.PREMIUM_PLAN_ID,
        URL
      );

      if (session) {
        return res.status(200).json({ url: session.url });
      }
    }
  }

  // Check if user & password matches
  if (await user.matchPassword(password)) {
    const privetRegistries = await PrivetRegistry.find({ user: user._id });

    res.json({
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        coupleName: user.coupleName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        questions: user.questions,
        avatar: user.avatar,
        ourStory: user.ourStory,
        location: user.location,
        qrCode: user.qrCode,
        qrCodeAvatar: user.qrCodeAvatar,
        receptionDetails: user.receptionDetails,
        giftCards: user.giftCards,
        registries: privetRegistries,
        socialAccounts: user.socialAccounts,
        weddingVideo: user.weddingVideo,
        weddingVideoTitle: user.weddingVedioTitle,
        isAdmin: user.isAdmin,
        role: user.role,
        venue: user.role === "venue" ? venue : user.venue, //!
        token: generateIdToken(user._id),
      },
      message: `Welcome back ${venue ? venue.businessName : user.fullName}`,
      redirect: user.role === "venue" ? true : false,
    });
  } else {
    res.status(401);
    throw new Error("Invalid password");
  }
});

// Request to reset password
export const requestResetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  // Check if user exists
  const user = await User.findOne({ email });

  // Check if user does not exist
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const url = `${process.env.CLIENT_URL}/password/reset/${resetPasswordIdToken(
    user._id
  )}`;

  await sendPasswordResetEmail(user.username, email, url);
  return res.status(200).json({
    message: `Password reset link has been sent to ${email}`,
  });
});

// Reset password
export const resetPassword = asyncHandler(async (req, res) => {
  const { token, password } = req.body;

  // Verify token
  const decode = await jwt.verify(token, process.env.JWT_SECRET);
  // Check if token is valid
  if (!decode) {
    res.status(401);
    throw new Error("Invalid token");
  }

  const id = decode.id;
  // Update password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.findByIdAndUpdate(id, {
    password: hashedPassword,
  });

  // Check if user does not exist
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.save();

  return res.status(200).json({
    message: `Your password has been changed successfully`,
  });
});

// Get User Profile
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const privetRegistries = await PrivetRegistry.find({ user: req.user._id });

  if (user) {
    res.json({
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        coupleName: user.coupleName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        questions: user.questions,
        location: user.location,
        avatar: user.avatar,
        ourStory: user.ourStory,
        qrCode: user.qrCode,
        qrCodeAvatar: user.qrCodeAvatar,
        receptionDetails: user.receptionDetails,
        giftCards: user.giftCards,
        registries: privetRegistries,
        socialAccounts: user.socialAccounts,
        weddingVideo: user.weddingVideo,
        weddingVideoTitle: user.weddingVedioTitle,
        isAdmin: user.isAdmin,
        role: user.role,
        token: generateIdToken(user._id),
      },
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// update user profile

export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const privetRegistries = await PrivetRegistry.find({ user: req.user._id });

  if (user) {
    const questions = {
      firstName: req.body.firstName || user.firstName,
      lastName: req.body.lastName || user.lastName,
      spouseFirstName:
        req.body.spouseFirstName || user.questions.spouseFirstName,
      spouseLastName: req.body.spouseLastName || user.questions.spouseLastName,
      couplePictures: req.body.couplePictures || user.questions.couplePictures,
      weddingDay: {
        weddingDate:
          req.body.weddingDate || user.questions.weddingDay.weddingDate,
        firstReception:
          req.body.firstReception || user.questions.weddingDay.firstReception,
        secondReception:
          req.body.secondReception || user.questions.weddingDay.secondReception,
      },
    };

    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.questions = questions || user.questions;
    if (req.body.location) {
      user.location = req.body.location;
    }

    if (req.body.venueId) {
      user.venue = req.body.venueId;
    }
    // user.avatar = req.body.avatar || user.avatar;
    user.ourStory = req.body.ourStory || user.ourStory;
    user.receptionDetails = req.body.receptionDetails || user.receptionDetails;
    if (req.body.socialAccounts) {
      user.socialAccounts = req.body.socialAccounts;
    }
    if (req.body.weddingVideo) {
      user.weddingVideo = req.body.weddingVideo;
    }
    if (req.body.weddingVideoTitle) {
      user.weddingVideoTitle = req.body.weddingVideoTitle;
    }
    user.qrCode = req.body.qrCode || user.qrCode;
    user.qrCodeAvatar = req.body.qrCodeAvatar || user.qrCodeAvatar;

    if (req.body.avatar) {
      user.avatar = req.body.avatar;
    }

    // if (req.body.registries) {
    //   const registries = [
    //     ...new Set([...user.registries, ...req.body.registries]),
    //   ];

    //   user.registries = [...new Set(registries)];
    // }

    if (req.body.giftCards) {
      const giftCards = [
        ...new Set([...user.giftCards, ...req.body.giftCards]),
      ];
      user.giftCards = [...new Set(giftCards)];
    }

    if (req.body.removeGiftCard) {
      user.giftCards.pull(req.body.removeGiftCard);
    }

    // if (req.body.removeRegistry) {
    //   user.registries.pull(req.body.removeRegistry);
    // }

    if (req.body.newPassword) {
      if (await user.matchPassword(req.body.oldPassword)) {
        user.password = req.body.newPassword;
      } else {
        res.status(400);
        throw new Error("Current password is incorrect");
      }
    }

    const updatedUser = await user.save();
    const updatesUser = await User.findById(updatedUser._id)
      .populate("giftCards")
      .populate("registries")
      .populate("venue", "businessName logo websiteLink");

    const updateUser = JSON.parse(JSON.stringify(updatesUser));
    res.json({
      user: {
        _id: updateUser._id,
        firstName: updateUser.firstName,
        lastName: updateUser.lastName,
        fullName: updateUser.fullName,
        coupleName: user.coupleName,
        username: updateUser.username,
        email: updateUser.email,
        phone: updateUser.phone,
        questions: updateUser.questions,
        avatar: updateUser.avatar,
        location: updateUser.location,
        ourStory: updateUser.ourStory,
        qrCode: updateUser.qrCode,
        qrCodeAvatar: updateUser.qrCodeAvatar,
        receptionDetails: updateUser.receptionDetails,
        giftCards: updateUser.giftCards,
        registries: privetRegistries,
        socialAccounts: updateUser.socialAccounts,
        weddingVideoTitle: updateUser.weddingVideoTitle,
        weddingVideo: updateUser.weddingVideo,
        isAdmin: updateUser.isAdmin,
        role: updateUser.role,
        venue: updateUser.venue,
        token: generateIdToken(updateUser._id),
      },
      message: "Updated!",
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// update user profile

export const getCouple = asyncHandler(async (req, res) => {
  const user = await User.findOne({ username: req.params.username })
    .populate("giftCards")
    .populate("registries")
    .populate("venue", "businessName logo websiteLink");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const privetRegistries = await PrivetRegistry.find({
    user: user._id,
  });

  res.status(200).json({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    coupleName: user.coupleName,
    username: user.username,
    email: user.email,
    phone: user.phone,
    location: user.location,
    questions: user.questions,
    avatar: user.avatar,
    ourStory: user.ourStory,
    qrCode: user.qrCode,
    qrCodeAvatar: user.qrCodeAvatar,
    receptionDetails: user.receptionDetails,
    giftCards: user.giftCards,
    registries: privetRegistries,
    socialAccounts: user.socialAccounts,
    venue: user.venue,
    weddingVideo: user.weddingVideo,
    weddingVideoTitle: user.weddingVideoTitle,
  });
});
