import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const bestSellers = [
  { id: 1, name: "Trendy T-Shirt", price: 29.99, image: "/trendy-tshirt.png" },
  { id: 2, name: "Stylish Jeans", price: 59.99, image: "/stylish-jean.png" },
  { id: 3, name: "Cozy Sweater", price: 49.99, image: "/cozy-sweater.png" },
  {
    id: 4,
    name: "Classic Sneakers",
    price: 79.99,
    image: "/classic-sneaker.jpg",
  },
];

export default function BestSellerProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <Button className="w-full mt-4">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
