import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Filters from "./_components/filters";
import { getProducts } from "@/lib/api";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  salePrice: number | null;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "T-Shirt 1",
    category: "Clothing",
    price: 29.99,
    salePrice: 24.99,
    image: "/trendy-tshirt.png",
  },
  {
    id: 2,
    name: "Jeans 1",
    category: "Clothing",
    price: 59.99,
    salePrice: null,
    image: "/stylish-jean.png",
  },
  {
    id: 3,
    name: "Sneakers 1",
    category: "Shoes",
    price: 89.99,
    salePrice: 79.99,
    image: "/cozy-sweater.png",
  },
  {
    id: 4,
    name: "Watch 1",
    category: "Accessories",
    price: 199.99,
    salePrice: null,
    image: "/classic-sneaker.jpg",
  },
  {
    id: 5,
    name: "T-Shirt 2",
    category: "Clothing",
    price: 34.99,
    salePrice: 29.99,
    image: "/trendy-tshirt.png",
  },
  {
    id: 6,
    name: "Jeans 2",
    category: "Clothing",
    price: 69.99,
    salePrice: null,
    image: "/stylish-jean.png",
  },
  {
    id: 7,
    name: "Sneakers 2",
    category: "Shoes",
    price: 99.99,
    salePrice: 89.99,
    image: "/cozy-sweater.png",
  },
  {
    id: 8,
    name: "Watch 2",
    category: "Accessories",
    price: 249.99,
    salePrice: 229.99,
    image: "/classic-sneaker.jpg",
  },
  // Add more products as needed
];

export default async function ProductList({
  searchParams,
}: {
  searchParams: unknown;
}) {

  const res = await getProducts(searchParams.)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Product List</h1>

      <div className="flex flex-col md:flex-row">
        {/* Filters - Left Side */}
        <Filters />

        {/* Product Grid - Right Side */}
        <div className="md:w-3/4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-4 h-48 w-full object-cover"
                  />
                  <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                  <p className="mb-2 text-sm text-gray-500">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between">
                    {product.salePrice ? (
                      <div>
                        <span className="text-lg font-bold text-red-500">
                          ${product.salePrice.toFixed(2)}
                        </span>
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-lg font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                    <Button>Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center space-x-2">
            <Button
              variant="outline"
              // onClick={() => paginate(currentPage - 1)}
              // disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            {Array.from({
              length: 6,
            }).map((_, index) => (
              <Button
                key={index}
                variant="outline"
                // variant={currentPage === index + 1 ? "default" : "outline"}
                // onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              // onClick={() => paginate(currentPage + 1)}
              // disabled={
              //   currentPage ===
              //   Math.ceil(filteredProducts.length / productsPerPage)
              // }
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
