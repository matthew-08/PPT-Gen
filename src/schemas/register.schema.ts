import { z } from 'zod';
import validator from 'validator';

const RegisterFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().refine((pass) => validator.isStrongPassword(pass), {
      message:
        'Password must contain at least 1 number, uppercase letter, and symbol',
    }),
    confirmPassword: z.string(),
  })
  .refine(
    ({ password, confirmPassword }) => {
      return password === confirmPassword;
    },
    { message: 'Passwords do not match' }
  );

export { RegisterFormSchema };
