import nodemailer from 'nodemailer';
import {
  activationTemplate,
  passwordResetTemplate,
} from './templates/index.js';

const {
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASS,
  EMAIL_FROM,
  SITE_NAME,
  CLIENT_URL,
} = process.env;

const transport = nodemailer.createTransport({
  host: EMAIL_SERVER_HOST,
  port: EMAIL_SERVER_PORT,
  auth: {
    user: EMAIL_SERVER_USER,
    pass: EMAIL_SERVER_PASS,
  },
});
/**
 * @param  {String} name
 * @param  {String} email
 * @param  {String} url
 */

export const sendActivationEmail = async (name, email, url) => {
  const mailOptions = {
    from: `${SITE_NAME} < ${EMAIL_FROM}`,
    to: email,
    subject: `Signup to ${CLIENT_URL}`,
    html: activationTemplate(name, url),
  };

  const result = await transport.sendMail(mailOptions);

  if (!result) {
    throw new Error('Something went wrong');
  }
};

/**
 * @param  {String} email
 * @param  {String} url
 */

export const sendPasswordResetEmail = async (email, url) => {
  const mailOptions = {
    from: `${SITE_NAME} < ${EMAIL_FROM}>`,
    to: email,
    subject: `Reset your Password for ${SITE_NAME}`,
    html: passwordResetTemplate(url),
  };

  const result = await transport.sendMail(mailOptions);

  if (!result) {
    throw new Error('Something went wrong');
  }
};
