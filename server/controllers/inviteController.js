import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const { EMAIL_USER, EMAIL_PASS } = process.env;

/**
 * @param  {Array} phone list of phone numbers ['8019197212', '8019197212']
 * @param  {String} from user email
 * @param  {Array} provider list of providers ['vzwpix', 'vzwpix']
 * @param  {String} subject email subject
 * @param  {String} message message to be sent
 * @desc    Send an sms to the users
 * @route   POST /api/v1/invite/sms
 * @access  Private
 * @returns {object} 200 - Success
 * @returns {object} 400 - Bad request
 */
export const inviteSMS = asyncHandler(async (req, res) => {
  const { phone, from, provider, subject, message } = req.body;

  let mailOptions = [];
  if (phone) {
    phone.forEach((_phone, i) => {
      mailOptions.push({
        from: from || EMAIL_USER,
        replyTo: from || EMAIL_USER,
        to: `${_phone}@${provider[i]}.com`,
        subject: `${subject} <${phone}>`,
        // subject: `${subject} <${from}>`,
        text: message,
      });
    });
  }

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  mailOptions.forEach((mailOption) => {
    try {
      smtpTransport.sendMail(mailOption, function (error, response) {
        if (error) {
          console.log("error", error);
        } else {
          console.log("Message sent: " + response.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  res.status(200).json({ message: "Invite sent" });
});

// Invite mms to phone
/**
 * @param  {Array} phone list of phone numbers ['8019197212', '8019197212']
 * @param  {String} from user email
 * @param  {Array} provider list of providers ['vzwpix', 'vzwpix']
 * @param  {String} subject email subject
 * @param  {String} message message to be sent
 * @param  {file} image image
 * @desc    Send an sms to the users
 * @route   POST /api/v1/invite/mms
 * @access  Private
 * @returns {object} 200 - Success
 * @returns {object} 400 - Bad request
 */
export const inviteMMS = asyncHandler(async (req, res) => {
  const { phone, from, provider, subject, message } = req.body;
  const file = req.files.image;
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "emailImg",
  });

  if (result) {
    fs.unlink(file.tempFilePath, (err) => {
      console.log(err);
    });

    const filenameArr = result.url.split("/");
    const filename = filenameArr[filenameArr.length - 1];

    let mailOptions = [];
    if (phone) {
      phone.forEach((_phone, i) => {
        mailOptions.push({
          from: from || EMAIL_USER,
          replyTo: from || EMAIL_USER,
          to: `${_phone}@${provider[i]}.com`,
          subject: `${subject} <${phone}>`,
          // subject: `${subject} <${from}>`,
          text: message,
          attachments: [
            {
              filename: filename,
              path: result.url,
            },
          ],
        });
      });
    }

    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    mailOptions.forEach((mailOption) => {
      try {
        smtpTransport.sendMail(mailOption, function (error, response) {
          if (error) {
            console.log("error", error);
          } else {
            console.log("Message sent: " + response.message);
          }
        });
      } catch (error) {
        console.log(error);
      }
    });

    res.status(200).json({ message: "Invite sent" });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});
