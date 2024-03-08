import * as yup from 'yup';

export const campaignSchema = yup.object({
  name: yup.string(),
  characters: yup.array().of(yup.string())
});
