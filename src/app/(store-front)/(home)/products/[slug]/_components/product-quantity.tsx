"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="flex items-center rounded-md border">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-r-none"
        onClick={decrementQuantity}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
        className="h-10 w-14 border-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-l-none"
        onClick={incrementQuantity}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};
