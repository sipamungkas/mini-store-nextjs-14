"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface Props {
  icon: React.ReactNode;
  title: string;
  href: string;
  collapsed: boolean;
}

export function SidebarItem({ icon, title, href, collapsed }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 mt-4 duration-200 border-l-4 ${
        href === pathname
          ? "bg-primary/10 text-primary border-primary"
          : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {icon}
      <span
        className={cn("mx-4 transition duration-300 delay-1000 ", {
          hidden: collapsed,
        })}
      >
        {title}
      </span>
    </Link>
  );
}
