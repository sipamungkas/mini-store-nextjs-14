"use client";

import { useState } from "react";
import { ChevronLeft, CreditCard, Minus, Plus, Truck } from "lucide-react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 79.99,
      quantity: 1,
      image: "/trendy-tshirt.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      quantity: 1,
      image: "/stylish-jean.png",
    },
    {
      id: 3,
      name: "Portable Charger",
      price: 49.99,
      quantity: 2,
      image: "/cozy-sweater.png",
    },
    {
      id: 4,
      name: "Portable Charger",
      price: 49.99,
      quantity: 2,
      image: "/classic-sneaker.jpg",
    },
  ]);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex justify-between">
                <div
                  className={`flex-1 text-center ${
                    step >= 1 ? "text-primary" : "text-gray-400"
                  }`}
                >
                  Customer Info
                </div>
                <div
                  className={`flex-1 text-center ${
                    step >= 2 ? "text-primary" : "text-gray-400"
                  }`}
                >
                  Shipping
                </div>
                <div
                  className={`flex-1 text-center ${
                    step >= 3 ? "text-primary" : "text-gray-400"
                  }`}
                >
                  Payment
                </div>
              </div>

              {step === 1 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    nextStep();
                  }}
                >
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </div>
                  </div>
                  <Button className="mt-4 w-full" type="submit">
                    Continue to Shipping
                  </Button>
                </form>
              )}

              {step === 2 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    nextStep();
                  }}
                >
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="123 Main St" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="state">State</Label>
                        <Select required>
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="12345" required />
                    </div>
                    <div className="grid gap-2">
                      <Label>Shipping Method</Label>
                      <RadioGroup defaultValue="standard">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard">
                            Standard Shipping (Free)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express">
                            Express Shipping ($10)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ChevronLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit">Continue to Payment</Button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Order placed successfully!");
                  }}
                >
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label>Payment Method</Label>
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={(value: "card" | "paypal") =>
                          setPaymentMethod(value)
                        }
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label
                            htmlFor="card"
                            className="flex items-center space-x-2"
                          >
                            <CreditCard className="h-5 w-5" />
                            <span>Credit/Debit Card</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label
                            htmlFor="paypal"
                            className="flex items-center space-x-2"
                          >
                            <Image
                              src="/placeholder.svg?height=20&width=20"
                              alt="PayPal"
                              width={20}
                              height={20}
                            />
                            <span>PayPal</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    {paymentMethod === "card" && (
                      <>
                        <div className="grid gap-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" required />
                          </div>
                        </div>
                      </>
                    )}
                    {paymentMethod === "paypal" && (
                      <div className="text-center">
                        <p>
                          You will be redirected to PayPal to complete your
                          purchase.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ChevronLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit">Place Order</Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <Separator />
            <CardFooter>
              <div className="w-full space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
