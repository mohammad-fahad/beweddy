import asyncHandler from "express-async-handler";
import { sendEmailInvites } from "../utils/mailer/index.js";
import nodemailer from "nodemailer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { sendGiftCardEmail } from "../utils/mailer/templates/index.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const { EMAIL_USER, EMAIL_PASS, SITE_NAME } = process.env;

export const attemptToGiftCardRedeem = async (name, email, message, url) => {
  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_USER}>`,
    to: email,
    subject: `Congratulations from BeWeddy`,
    html: sendGiftCardEmail(name, message, url),
  };

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
  await smtpTransport.sendMail(mailOptions);
  // if (result) {
  //     res.status(200).json({ success: true });
  // }
};

export const giftCardPurchasedNotifyToGuest = async ({
  guestEmail,
  coupleName,
  amount,
}) => {
  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_USER}>`,
    to: guestEmail,
    subject: `Gift Card Purchased Successfully`,
    html: `

`,
  };

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
  await smtpTransport.sendMail(mailOptions);
  // if (result) {
  //     res.status(200).json({ success: true });
  // }
};
