import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import {
  generateActivationToken,
  generateIdToken,
  resetPasswordIdToken,
} from '../utils/token/index.js';
import {
  sendActivationEmail,
  sendPasswordResetEmail,
} from '../utils/mailer/index.js';

// Register New User

export const register = asyncHandler(async (req, res) => {
  const { email, phone, password, questions, role } = req.body;
  const { firstName, lastName } = questions;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create new user
  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
    questions,
    role,
  });

  if (user) {
    const activationToken = generateActivationToken(user._id);
    const url = `${process.env.CLIENT_URL}/activation/${activationToken}`;
    await sendActivationEmail(user.fullName, email, url);

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

export const activeUser = asyncHandler(async (req, res) => {
  const { token } = req.body;

  // Decode token
  const decode = jwt.verify(token, process.env.JWT_SECRET);

  // Check if token is not valid
  if (!decode) {
    res.status(401);
    throw new Error('Activation token expired');
  }

  const id = decode.id;

  // Check if user exists
  const userExists = await User.findById(id);
  if (!userExists) {
    res.status(404);
    throw new Error('User not found');
  }

  if (userExists.emailVerified) {
    res.status(400);
    throw new Error('Account already activated, please login');
  }

  userExists.emailVerified = true;
  const user = await userExists.save();

  // Send response
  if (user) {
    res.status(201).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        questions: user.questions,
        avatar: user.avatar,
        isAdmin: user.isAdmin,
        role: user.role,
        token: generateIdToken(user._id),
      },
      message: `Your account has been successfully activated!`,
    });
  }
});

// User Login

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && !user.emailVerified) {
    const activationToken = generateActivationToken(user._id);
    const url = `${process.env.CLIENT_URL}/activation/${activationToken}`;
    await sendActivationEmail(user.fullName, email, url);

    res.status(401);
    throw new Error(
      'Your account is not activated yet, please check your email'
    );
  }

  // Check if user & password matches
  if (user && (await user.matchPassword(password))) {
    res.json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        questions: user.questions,
        avatar: user.avatar,
        isAdmin: user.isAdmin,
        role: user.role,
        token: generateIdToken(user._id),
      },
      message: `Welcome back ${user.fullName}`,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or phone or password');
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
    throw new Error('User not found');
  }

  const url = `${process.env.CLIENT_URL}/password/reset/${resetPasswordIdToken(
    user._id
  )}`;

  await sendPasswordResetEmail(email, url);
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
    throw new Error('Invalid token');
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
    throw new Error('User not found');
  }

  await user.save();

  return res.status(200).json({
    message: `Your password has been changed successfully`,
  });
});

// Get User Profile
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        balance: user.balance,
        avatar: user.avatar,
        isAdmin: user.isAdmin,
        token: generateIdToken(user._id),
      },
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
