import { z } from 'zod';
import validator from 'validator';

const RegisterFormSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(10, 'Password must contain at least 10 character(s)')
      .refine((pass) => validator.isStrongPassword(pass), {
        message:
          'Password must contain at least 1 number, uppercase letter, and symbol',
      }),
    confirmPassword: z.string(),
  })
  .refine(
    ({ password, confirmPassword }) => {
      return password === confirmPassword;
    },
    { message: 'Passwords do not match', path: ['confirmPassword'] }
  );

export type UserRegisterInput = z.infer<typeof RegisterFormSchema>;

export { RegisterFormSchema };
