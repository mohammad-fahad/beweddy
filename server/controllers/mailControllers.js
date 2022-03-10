import nodemailer from "nodemailer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { sendGiftCardEmail } from "../utils/mailer/templates/index.js";
import { welcomeEmailCouple } from "../utils/mailer/templates/welcome-email.js";
import { coupleNotificationTemplate } from "../utils/mailer/templates/couple-join.js";

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
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2"
    class="sg-campaigns"
    xmlns="http://www.w3.org/1999/xhtml"
  >
  <head>
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <!--[if !mso]><!-->

  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />


<style>
@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');
  body {
    font-family: "Inter", sans-serif;
  }

  h1 {
    font-family: "Niconne", cursive !important;
  }
 @media screen and (max-width: 630px) {
      h1 {
        font-size: 38px !important;
      }
      p {
        font-size: 18px !important;
      }
      img {
       max-width: 70% !important;
              width: 48% !important;
              height: auto !important;   
      }
    }
</style>
</head>
<body>
  <table style="
        max-width: 800px;
        width: 100%;

        padding: 3rem 1rem 1.5rem 1rem;
        margin: auto;
      ">
    <tr style="margin-bottom: 1.5rem">
      <td style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px" valign="top" align="center">
        <img class="max-width" border="0" style="
              display: block;
              color: #000000;
              text-decoration: none;
              font-family: Helvetica, arial, sans-serif;
              font-size: 16px;
              max-width: 33% !important;
              width: 26%;
              height: auto !important;
            " alt="" data-proportionally-constrained="true" data-responsive="true"
          src="http://cdn.mcauto-images-production.sendgrid.net/87928f979ea43fec/6e3fc13c-cdc9-4f50-a73f-1e4fc2614f44/1004x388.png" />
      </td>
    </tr>

    <table style="
          max-width: 800px;
          width: 100%;
          border: 2px solid #dfdfdf;
          border-radius: 5px;
          background: #fce0eb;
          padding: 3rem 1rem 1.5rem 1rem;
          margin: auto;
        ">
      <tr>
        <td align="center">
          <h1 style="font-size: 52px; font-weight: 400; font-family: 'Niconne', cursive;">
            Thank You!
          </h1>
        </td>
      </tr>
      <tr>
        <td align="center">
          <p style="font-size: 24px">
            Your gift card is on its way for <strong>${coupleName}</strong>
            <br />
            Purchased Successfully.
          </p>
          <p style="font-size: 20px">
            Gift Card Amount: <strong>$ ${amount}</strong>
          </p>
        </td>
      </tr>
    </table>
    <table style="max-width: 800px; width: 100%; margin: 1.5rem auto">
      <tr class="row">
        <th align="left" style="font-weight: 500">
          <p>©2022 BeWeddy. All rights reserved.</p>
        </th>
        <th style="display: flex; justify-content: flex-end; font-weight: 300" class="links">
          <p>Need help, Contact Support at nate@beweddy.com</p>
        </th>
      </tr>
    </table>
  </table>
</body>

</html>
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

export const sendWelcomeEmailToCouple = async ({ email,logo }) => {
  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_USER}>`,
    to: email,
    subject: `Welcome to Beweddy`,
    html: welcomeEmailCouple(logo),
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

export const sendNewCoupleEmailToVenue = async ({
  email,
  logo,
  websiteURL,
  venueName,
}) => {
  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_USER}>`,
    to: email,
    subject: `A new couple is registered under you.`,
    html: coupleNotificationTemplate({
      logo,
      websiteURL,
      venueName,
    }),
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
