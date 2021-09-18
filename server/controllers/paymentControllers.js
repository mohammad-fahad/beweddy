import asyncHandler from 'express-async-handler';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// Get All Registry
export const checkoutSession = asyncHandler(async (req, res) => {

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
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    line_items: [transformedItem],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    // metadata: {
    //   email,
    //   images: JSON.stringify(items.map(item => item.image)),
    // },
  });

  res.redirect(303, session.url);
});
