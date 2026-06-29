import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(client.db("qurbanihat"), {
    client,           // Pass the client for transactions
  }),
  // Optional but recommended
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});