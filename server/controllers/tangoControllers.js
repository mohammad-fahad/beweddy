import axios from 'axios';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

const { TANGO_API, TANGO_ACCOUNT_NUMBER, TANGO_EMAIL_TEMPLATE, TANGO_UTID } =
  process.env;

// Get All Gifts
export const getGifts = asyncHandler(async (req, res) => {
  // const { token } = req.body;
  // const { coupleName, coupleEmail, guestEmail, guestName, message, amount } =
  //   jwt.verify(token, process.env.JWT_SECRET);

  const payload = {
    accountIdentifier: TANGO_ACCOUNT_NUMBER,
    // amount: Number(amount),
    amount: 0.01,
    campaign: '',
    customerIdentifier: 'customerId',
    emailSubject: '',
    externalRefID: '',
    message,
    notes: '',
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
      'Content-Type': 'application/json',
    },
  };

  const { data } = axios.post(TANGO_API, payload, config);

  res.status(200).json(gifts);
});
