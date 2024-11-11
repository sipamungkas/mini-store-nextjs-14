"use server";

import { signIn, signOut } from "@/lib/auth";

export const signInWithGoogle = async () => {
  await signIn("google");
};

export const signOutAll = async () => {
  await signOut({ redirectTo: "/login" });
};
