"use client";

import {
  BarChart,
  CreditCard,
  Image,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./_components/sidebar-item";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <SidebarItem
            icon={<BarChart className="mr-3 h-5 w-5" />}
            title="Dashboard"
            href="/admin"
          />
          <SidebarItem
            // eslint-disable-next-line jsx-a11y/alt-text
            icon={<Image className="mr-3 h-5 w-5" />}
            title="Featured Carousel"
            href="/admin/featured-carousel"
          />
          <SidebarItem
            icon={<Package className="mr-3 h-5 w-5" />}
            title="Manage Products"
            href="/admin/products"
          />
          <SidebarItem
            icon={<Users className="mr-3 h-5 w-5" />}
            title="Manage Users"
            href="/admin/users"
          />
          <SidebarItem
            icon={<ShoppingCart className="mr-3 h-5 w-5" />}
            title="Manage Orders"
            href="/admin/orders"
          />
          <SidebarItem
            icon={<CreditCard className="mr-3 h-5 w-5" />}
            title="Manage Payments"
            href="/admin/payments"
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-3xl font-medium text-gray-700">
            {pathname.charAt(0).toUpperCase() + pathname.slice(1)}
          </h3>
          <div className="mt-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
