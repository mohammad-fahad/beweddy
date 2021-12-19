import jwt from 'jsonwebtoken';

/**
 * @param  {String} id
 */
export const generateTangoToken = payload => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '365d' });
};

/**
 * @param  {String} id
 */
export const generateActivationToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

/**
 * @param  {String} id
 */
export const generateIdToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

/**
 * @param  {String} id
 */
export const resetPasswordIdToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '5m' });
};
