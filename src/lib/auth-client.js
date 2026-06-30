import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 
           "http://localhost:3000"
});

// Destructure from the created instance
export const { signIn, signUp, useSession } = authClient;