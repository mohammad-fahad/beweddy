import asyncHandler from "express-async-handler";
import { createStripeWebhook } from "../lib/stripe.js";
import Venue from "../models/Venue.js";

// Create New Registry
export const stripeWebhook = asyncHandler(async (req, res) => {
  const event = await createStripeWebhook(
    req.body,
    req.header("Stripe-Signature")
  );

  if (!event) {
    res.status(400);
    throw new Error("Something went wrong");
  }

  const data = event.data.object;
  const venue = await Venue.findOne({ billingID: data.customer });

  if (!venue) {
    res.status(404);
    throw new Error("Venue not found");
  }

  const isOnTrial = data.status === "trialing";

  switch (event.type) {
    case "customer.subscription.created":
      if (data.plan.id === process.env.PREMIUM_PLAN_ID) {
        venue.plan = "premium";
      }

      if (isOnTrial) {
        venue.plan = "trial";
        venue.hasTrial = true;
        venue.endDate = new Date(data.current_period_end * 1000);
      } else if (data.status === "active") {
        venue.hasTrial = false;
        venue.endDate = new Date(data.current_period_end * 1000);
      }

      if (data.canceled_at) {
        // cancelled
        venue.plan = "none";
        venue.hasTrial = false;
        venue.endDate = null;
      }

      await venue.save();

      break;

    case "customer.subscription.updated":
      if (data.plan.id === process.env.PREMIUM_PLAN_ID) {
        venue.plan = "premium";
      }

      if (isOnTrial) {
        venue.plan = "trial";
        venue.hasTrial = true;
        venue.endDate = new Date(data.current_period_end * 1000);
      } else if (data.status === "active") {
        venue.hasTrial = false;
        venue.endDate = new Date(data.current_period_end * 1000);
      }

      if (data.canceled_at) {
        // cancelled
        venue.plan = "none";
        venue.hasTrial = false;
        venue.endDate = null;
      }

      await venue.save();
      break;
    default:
  }

  res.status(200).end();
});
