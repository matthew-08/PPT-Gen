import z from 'zod';

const reqError = 'Field is required';
const SlideRowSchema = z.object({
  question: z.string({ required_error: reqError }).min(1),
  additional: z.string({ required_error: reqError }).min(1).optional(),
  answer: z.string({ required_error: reqError }).min(1).optional(),
});

export default SlideRowSchema;
