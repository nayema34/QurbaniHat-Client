import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

const client = new MongoClient(process.env.MONGODB_URI);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectURI: `${process.env.BETTER_AUTH_URL}/api/auth/callback/google`,
    },
  },
  database: mongodbAdapter(client.db("qurbanihat"), { 
    client 
  }),
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [
    "https://qurbani-hat-client.vercel.app",
    "http://localhost:3000"
  ],
});