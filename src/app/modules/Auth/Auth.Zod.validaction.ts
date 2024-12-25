import { z } from 'zod';

const createLoginUserValidaction = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is Requerd' }),
    password: z.string({ required_error: 'Password is Requerd' }),
  }),
});

export const authValidaction = {
  createLoginUserValidaction,
};
