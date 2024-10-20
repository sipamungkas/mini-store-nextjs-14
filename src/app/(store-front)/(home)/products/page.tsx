"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    let result = products;

    // Search filter
    if (searchTerm) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Price range filter
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // On sale filter
    if (onSaleOnly) {
      result = result.filter((product) => product.salePrice !== null);
    }

    // Sort by price
    result.sort((a, b) => {
      const priceA = a.salePrice || a.price;
      const priceB = b.salePrice || b.price;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, priceRange, sortOrder, onSaleOnly]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Product List</h1>

      <div className="flex flex-col md:flex-row">
        {/* Filters - Left Side */}
        <div className="mb-8 md:mb-0 md:mr-8 md:w-1/4">
          <div className="space-y-6">
            <div>
              <Label htmlFor="search">Search</Label>
              <Input
                id="search"
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="price-range">Price Range</Label>
              <Slider
                id="price-range"
                min={0}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="mt-2 text-sm">
                ${priceRange[0]} - ${priceRange[1]}
              </div>
            </div>
            <div>
              <Label htmlFor="sort">Sort by Price</Label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger id="sort">
                  <SelectValue placeholder="Sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Low to High</SelectItem>
                  <SelectItem value="desc">High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="on-sale"
                checked={onSaleOnly}
                onCheckedChange={setOnSaleOnly}
              />
              <Label htmlFor="on-sale">Show only items on sale</Label>
            </div>
          </div>
        </div>

        {/* Product Grid - Right Side */}
        <div className="md:w-3/4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentProducts.map((product) => (
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
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            {Array.from({
              length: Math.ceil(filteredProducts.length / productsPerPage),
            }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(filteredProducts.length / productsPerPage)
              }
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
