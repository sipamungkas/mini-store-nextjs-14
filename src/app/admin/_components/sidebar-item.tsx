"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export function SidebarItem({ icon, title, href }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
        href === pathname
          ? "bg-primary/10 text-primary border-primary"
          : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {icon}
      <span className="mx-4">{title}</span>
    </Link>
  );
}
