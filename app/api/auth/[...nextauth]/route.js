import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import clientPromise from "../../utils/connection";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise) || {},
  providers: [
    // OAuth authentication providers...
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      version: "2.0",
    }),
    // Passwordless / email sign in
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: "noreply@E-Com",
    }),
  ],
});

export { handler as GET, handler as POST };
