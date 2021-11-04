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

export const createSubscription = async (customer, price) => {
  const session = await Stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer,
    line_items: [
      {
        price,
        quantity: 1,
      },
    ],
    subscription_data: {
      trial_period_days: 30,
    },

    // success_url: `http://localhost:4242/success?session_id={CHECKOUT_SESSION_ID}`,
    // cancel_url: `http://localhost:4242/failed`,
  });

  return session;
};

export const createStripeWebhook = (rawBody, sig) => {
  const event = stripe.webhooks.constructEvent(
    rawBody,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  );
  return event;
};
