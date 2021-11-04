import asyncHandler from 'express-async-handler';
import { createStripeWebhook } from '../lib/stripe.js';
import Venue from '../models/Venue.js';

// Create New Registry
export const stripeWebhook = asyncHandler(async (req, res) => {
  const event = createStripeWebhook(req.body, req.headers('Stripe-Signature'));

  if (!event) {
    res.status(400);
    throw new Error('Something went wrong');
  }

  const data = event.data.object;

  switch (event.type) {
    case 'customer.subscription.created': {
      const venue = await Venue.findOne({ billingID: data.customer });

      if (data.plan.id === process.env.PREMIUM_PLAN_ID) {
        user.plan = 'basic';
      }

      user.hasTrial = true;
      user.endDate = new Date(data.current_period_end * 1000);
      await user.save();

      break;
    }
    default:
  }
});
