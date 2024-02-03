import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup.string().required('-username is required'),
  password: yup.string().required('-password is required')
});
