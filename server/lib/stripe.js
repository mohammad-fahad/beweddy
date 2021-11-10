import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * @param  {string} {email
 * @param  {string} name}
 */
export const addNewCustomer = async ({ email, name }) => {
  return await stripe.customers.create({ email, description: name });
};

/**
 * @param  {string} id
 */
export const getCustomerById = async id => {
  return await stripe.customers.retrieve(id);
};

export const createSubscription = async (customer, price, success_url) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer,
    line_items: [
      {
        price,
        quantity: 1,
      },
    ],
    allow_promotion_codes: true,
    // discounts: [{ coupon: process.env.COUPON }],
    // subscription_data: {
    //   trial_period_days: 30,
    // },
    success_url: `${success_url}/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}`,
  });

  return session;
};

/**
 * @param  {} rawBody - req.body
 * @param  {} sig - req.header
 */
export const createStripeWebhook = (rawBody, sig) => {
  const event = stripe.webhooks.constructEvent(
    rawBody,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  );

  return event;
};

/**
 * @param  {} customer - Stripe Customer (billingID)
 */
export const createBillingSession = async customer => {
  return await stripe.billingPortal.sessions.create({
    customer,
    return_url: process.env.CLIENT_URL,
  });
};
