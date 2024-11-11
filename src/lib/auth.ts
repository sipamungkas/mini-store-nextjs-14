import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const options = {
  providers: [
    Google({
      profile(profile) {
        return { ...profile, role: profile.role ?? "user", id: profile.sub };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(options);
