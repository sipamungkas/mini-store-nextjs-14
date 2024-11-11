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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      console.log({ "USER=>": user, token });
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      console.log({ auth });
      const isLoggedIn = !!auth?.user;
      // protected paths
      const buyer_paths = ["/dashboard"];
      const admin_paths = ["/admin"];
      const isAdmin = auth?.user?.role === "admin";

      const isAdminPath = buyer_paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );
      const isBuyerPath = admin_paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isLoggedIn && nextUrl.pathname === "/login") {
        const redirectUrl = new URL("/", nextUrl.origin);
        return Response.redirect(redirectUrl);
      }

      if ((isBuyerPath || isAdminPath) && !isLoggedIn) {
        const redirectUrl = new URL("/login", nextUrl.origin);

        redirectUrl.searchParams.append("callbackUrl", nextUrl.href);

        return Response.redirect(redirectUrl);
      }

      // admin can only access admin
      if (!isAdmin && isLoggedIn && nextUrl.pathname.startsWith("/admin")) {
        const redirectUrl = new URL("/dashboard", nextUrl.origin);
        return Response.redirect(redirectUrl);
      }

      // dashboard can only be accessed by buyer
      if (isAdmin && isLoggedIn && nextUrl.pathname.startsWith("/dashboard")) {
        const redirectUrl = new URL("/dashboard", nextUrl.origin);
        return Response.redirect(redirectUrl);
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(options);
