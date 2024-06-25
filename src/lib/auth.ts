import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";

// export const authOptions = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [Google],
// });

  export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google],
  });