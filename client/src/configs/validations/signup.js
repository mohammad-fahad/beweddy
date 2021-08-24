import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email('Must be a valid email address.')
    .required('Email is required!'),
  password: yup
    .string()
    .required('Password is required!')
    .min(6, 'Password must be at least 6 characters'),
  // your_firstName: yup.string().required('First name is required!'),
  // your_lastName: yup.string().required('Last name is required!'),
  // spouse_to_be_firstName: yup.string().required('First name is required!'),
  // spouse_to_be_lastName: yup.string().required('Last name is required!'),
});
