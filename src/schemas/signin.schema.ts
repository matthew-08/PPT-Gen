import z from 'zod';

const requiredMessage = 'Field is required';

const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string({ required_error: requiredMessage })
    .min(6, 'Password is not long enough'),
});

export { SignInFormSchema };
