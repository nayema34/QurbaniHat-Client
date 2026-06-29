import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
})

// Fix: Destructure from the instance above instead of calling createAuthClient() again
export const { signIn, signUp, useSession } = authClient;