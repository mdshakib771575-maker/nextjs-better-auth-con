import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("BetterAuthUserSha");

export const auth = betterAuth({
  atabase: mongodbAdapter(db, {client}),
   emailAndPassword: { 
    enabled: true, 
  }
});



