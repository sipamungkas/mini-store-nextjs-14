"use client";

import {
  BarChart,
  CreditCard,
  Image,
  Menu,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./_components/sidebar-item";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white shadow-md transition-all duration-300",
          !isSidebarCollapsed ? "w-64" : "w-16"
        )}
      >
        <div className="p-4 flex justify-between items-center">
          {!isSidebarCollapsed && <h1 className="text-2xl font-bold">Admin</h1>}
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-6">
          <SidebarItem
            icon={<BarChart className="h-5 w-5" />}
            title="Dashboard"
            href="/admin"
            collapsed={isSidebarCollapsed}
          />
          <SidebarItem
            // eslint-disable-next-line jsx-a11y/alt-text
            icon={<Image className="h-5 w-5" />}
            title="Featured Carousel"
            href="/admin/featured-carousel"
            collapsed={isSidebarCollapsed}
          />
          <SidebarItem
            icon={<Package className="h-5 w-5" />}
            title="Manage Products"
            href="/admin/products"
            collapsed={isSidebarCollapsed}
          />
          <SidebarItem
            icon={<Users className="h-5 w-5" />}
            title="Manage Users"
            href="/admin/users"
            collapsed={isSidebarCollapsed}
          />
          <SidebarItem
            icon={<ShoppingCart className="h-5 w-5" />}
            title="Manage Orders"
            href="/admin/orders"
            collapsed={isSidebarCollapsed}
          />
          <SidebarItem
            icon={<CreditCard className="h-5 w-5" />}
            title="Manage Payments"
            href="/admin/payments"
            collapsed={isSidebarCollapsed}
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-3xl font-medium text-gray-700">
            {pathname
              ? pathname.split("/").pop()?.split("-").join(" ").toUpperCase()
              : ""}
          </h3>
          <div className="mt-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
