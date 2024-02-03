import * as yup from 'yup';

export const signUpSchema = yup.object({
  username: yup
    .string()
    .required('-username is required')
    .min(6, '-username should be between 6 and 12 characters long')
    .max(12, '-username should be between 6 and 12 characters long'),
  password: yup
    .string()
    .required('-password is required')
    .min(8, '-password should be between 8 and 20 characters long')
    .max(20, '-password should be between 8 and 20 characters long')
});
