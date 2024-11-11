"use client";

import { signOutAll } from "@/app/(store-front)/login/action";
import { LogOut } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export const LogoutMenu = () => {
  return (
    <DropdownMenuItem className="cursor-pointer" onClick={() => signOutAll()}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
};
