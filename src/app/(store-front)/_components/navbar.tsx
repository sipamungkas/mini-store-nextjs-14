import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Home,
  Info,
  Phone,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto">
      <div className="w-full mx-auto flex justify-center ">
        <div className="container flex h-14">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Mini-Shop
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-primary flex items-center">
                <Home className="h-4 w-4 mr-2 inline-block" />
                Home
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-primary flex items-center"
              >
                <Phone className="h-4 w-4 mr-2 inline-block" />
                Contact
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-primary flex items-center"
              >
                <Info className="h-4 w-4 mr-2 inline-block" />
                About
              </Link>
            </nav>
          </div>
          <div className="flex md:hidden ml-1">
            <Link href="/" className="mr-6 flex items-center space-x-1">
              <ShoppingCart className="h-6 w-6" />
              <div className="flex flex-col items-center">
                <span className="font-bold text-xs p-0 m-0">Mini</span>
                <span className="font-bold text-xs p-0 m-0">Shop</span>
              </div>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products" className="pl-8" />
              </div>
            </div>
            <nav className="flex items-center">
              <Link
                href="/cart"
                className="transition-colors hover:text-primary"
              >
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
              <Link
                href="/wishlist"
                className="transition-colors hover:text-primary"
              >
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Wishlist</span>
                </Button>
              </Link>
              {/* <ThemeSwitch /> */}
              <Link
                href="/profile"
                className="transition-colors hover:text-primary"
              >
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
