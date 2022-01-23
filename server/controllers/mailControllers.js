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

export const giftCardPurchasedNotifyToGuest = async (email) => {
  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_USER}>`,
    to: email,
    subject: `Gift Card Purchased Successfully`,
    html: `<div style={{backgroundColor: '#f5f5f5', padding: 10}}>
    <div style={{backgroundColor: '#fff', padding: 10}}>
      <p style={{marginBottom: '1rem', fontSize: '2rem'}}>
        Thank you! Your gift card has been purchased successfully.
      </p>
    </div>
  </div>
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
