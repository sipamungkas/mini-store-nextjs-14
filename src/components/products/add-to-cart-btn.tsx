"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

export const AddToCartBtn = ({ id }: { id: string }) => {
  return (
    <Button
      onClick={() => {
        console.log({ id });
      }}
      className="w-full"
    >
      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
    </Button>
  );
};
