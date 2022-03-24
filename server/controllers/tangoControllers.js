import axios from "axios";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import {
  attemptToGiftCardRedeem,
  giftCardPurchasedNotifyToGuest,
} from "./mailControllers.js";
import User from "../models/User.js";
import { giftCardPurchasedNotify } from "./invitationControllers.js";
import { defaultLogo } from "./userControllers.js";

const {
  TANGO_API,
  TANGO_ACCOUNT_NUMBER,
  TANGO_ACCOUNT_USERNAME,
  TANGO_ACCOUNT_API_PASSWORD,
  TANGO_EMAIL_TEMPLATE,
  TANGO_CUSTOMER_IDENTIFIER,
  TANGO_UTID,
  CLIENT_URL,
} = process.env;

// Get All Gifts
export const getGifts = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const {
    coupleName,
    cardName,
    guestEmail,
    guestName,
    amount,
    coupleEmail,
    message,
    image,
  } = jwt.verify(token, process.env.JWT_SECRET);
  const URL = `${CLIENT_URL}/redeem/${token}`;
  const user = await User.findOne({ email: coupleEmail }).populate("venue");

  await attemptToGiftCardRedeem(
    guestName,
    user.venue.logo.secure_url ? user.venue.logo.secure_url : defaultLogo,
    coupleEmail,
    message,
    amount,
    image,
    URL
  );
  await giftCardPurchasedNotifyToGuest({
    guestEmail,
    logo: user.venue.logo.secure_url ? user.venue.logo.secure_url : defaultLogo,
  });
  await giftCardPurchasedNotify({
    coupleName,
    guestName,
    coupleEmail,
    guestEmail,
    amount,
    cardName,
    venue: user.venue
      ? user.venue.businessName
      : "Not connected with any venue",
  });

  res.status(200).json({ success: true });
});

// Get All Gifts
export const redeemGiftCard = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const {
    id,
    coupleName,
    coupleEmail,
    guestEmail,
    guestName,
    message,
    amount,
  } = jwt.verify(token, process.env.JWT_SECRET);

  const payload = {
    accountIdentifier: TANGO_ACCOUNT_NUMBER,
    amount: Number(amount),
    // amount: 0.01,
    campaign: "",
    customerIdentifier: TANGO_CUSTOMER_IDENTIFIER, // Account Group ID
    emailSubject: "",
    externalRefID: id, // to prevent duplicate purchase
    message,
    notes: "",
    recipient: {
      email: coupleEmail,
      firstName: coupleName,
    },
    etid: TANGO_EMAIL_TEMPLATE,
    sendEmail: true,
    sender: {
      email: guestEmail,
      firstName: guestName,
    },
    utid: TANGO_UTID,
  };

  // axios config
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    auth: {
      username: TANGO_ACCOUNT_USERNAME,
      password: TANGO_ACCOUNT_API_PASSWORD,
    },
  };

  const { data } = axios.post(TANGO_API, payload, config);
  console.log(data);

  res.status(200).json(data);
});
