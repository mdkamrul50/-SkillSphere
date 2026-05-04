import { createAuthClient } from 'better-auth/react';
export const authClient = createAuthClient({
  baseURL: 'https://skill-sphere-phi-nine.vercel.app',
});

export const { signIn, signUp, useSession } = createAuthClient();
