import asyncHandler from 'express-async-handler';
// import { sendEmailInvites } from '../utils/mailer/index.js';
import nodemailer from 'nodemailer';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';
import {
  coupleActivationTemplate,
  passwordResetTemplate,
  sendEmailInvitesTemplate,
  venueActivationTemplate,
} from '../utils/mailer/templates/index.js';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const { EMAIL_USER, EMAIL_PASS, CLIENT_URL, SITE_NAME } = process.env;

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
  const { phones, coupleName, message, from } = req.body;
  let mailOptions = [];
  if (phones) {
    phones.forEach((phone, i) => {
      mailOptions.push({
        from: EMAIL_USER,
        replyTo: from,
        to: `${phone.value}@${phone.provider.mms}`,
        subject: `${coupleName}'s Wedding`,
        // subject: `${subject} <${from}>`,
        text: message,
      });
    });
  }

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  mailOptions.forEach(mailOption => {
    try {
      smtpTransport.sendMail(mailOption, function (error, response) {
        if (error) {
          console.log('error', error);
        } else {
          console.log('Message sent: ' + response);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  res.status(200).json({ message: 'Invite sent' });
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
 *
 */

export const sendActivationEmail = async (name, email, url, role) => {
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_USER}>`,
    to: email,
    subject: `Signup to ${CLIENT_URL}`,
    html:
      role === 'couple'
        ? coupleActivationTemplate(name, url)
        : venueActivationTemplate(name, url),
  };

  await smtpTransport.sendMail(mailOptions);
};
export const sendPasswordResetEmail = async (email, url) => {
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${SITE_NAME} <${EMAIL_USER}>`,
    to: email,
    subject: `Reset your Password for ${SITE_NAME}`,
    html: passwordResetTemplate(url),
  };

  await smtpTransport.sendMail(mailOptions);
};

export const inviteMMS = asyncHandler(async (req, res) => {
  const { phones, from, coupleName, message, image } = req.body;

  let mailOptions = [];
  if (phones) {
    phones.forEach((phone, i) => {
      mailOptions.push({
        from: EMAIL_USER,
        replyTo: from,
        to: `${phone.value}@${phone.provider.mms}`,
        subject: `${coupleName}'s Wedding`,
        // subject: `${subject} <${from}>`,
        text: message,
        attachments: [
          {
            filename: image.filename,
            path: image.url,
          },
        ],
      });
    });
  }

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  mailOptions.forEach(mailOption => {
    try {
      smtpTransport.sendMail(mailOption, function (error, response) {
        if (error) {
          console.log('error', error);
        } else {
          console.log('Message sent: ' + response.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  res.status(200).json({ message: 'Invite sent' });
});

export const inviteEmail = asyncHandler(async (req, res) => {
  const { emails, from, coupleName, message, image } = req.body;

  let mailOptions = [];
  if (emails) {
    emails.forEach((email, i) => {
      mailOptions.push({
        from: EMAIL_USER,
        replyTo: from,
        to: email,
        subject: `${coupleName}'s Wedding`,
        // subject: `${subject} <${from}>`,
        text: message,
        html: sendEmailInvitesTemplate(coupleName, image, message),
      });
    });
  }

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  mailOptions.forEach(mailOption => {
    try {
      smtpTransport.sendMail(mailOption, function (error, response) {
        if (error) {
          console.log('error', error);
        } else {
          console.log('Message sent: ' + response.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  res.status(200).json({ message: 'Invite sent' });
});
