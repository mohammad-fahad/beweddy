import asyncHandler from 'express-async-handler';
import { nanoid } from 'nanoid';
import Stripe from 'stripe';
import { generateTangoToken } from '../utils/token/index.js';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Get All Registry
export const checkoutSession = asyncHandler(async (req, res) => {
  const token = generateTangoToken({ ...req.body.gift, id: nanoid() });

  const transformedItem = {
    description: req.body.description,
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: (Number(req.body.price) + 3.23) * 100,
      product_data: {
        name: req.body.title,
        images: [req.body.image],
      },
    },
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // shipping_address_collection: {
    //   allowed_countries: ['US'],
    // },
    line_items: [transformedItem],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/payment/${token}`,
    // cancel_url: `${process.env.CLIENT_URL}/couple/${req.body.cancel}`,
    cancel_url: `${process.env.CLIENT_URL}`,
    // metadata: {
    //   email,
    //   images: JSON.stringify(items.map(item => item.image)),
    // },
  });
  res.json(session.url);
});

export const mailoutPayment = asyncHandler(async (req, res) => {
  const transformedItem = {
    description: req.body.description,
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: Number(req.body.price) * 100,
      product_data: {
        name: req.body.title,
        images: [req.body.image],
      },
    },
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    line_items: [transformedItem],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/mailout?payment=success`,
    // cancel_url: `${process.env.CLIENT_URL}/couple/${req.body.cancel}`,
    cancel_url: `${process.env.CLIENT_URL}`,
    // metadata: {
    //   email,
    //   images: JSON.stringify(items.map(item => item.image)),
    // },
  });
  res.json(session.url);
});
