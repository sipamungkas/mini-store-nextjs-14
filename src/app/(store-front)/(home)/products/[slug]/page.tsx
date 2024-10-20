"use client";

import { useState, useCallback, useEffect } from "react";
import { Minus, Plus, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductItem from "@/components/products/product-item";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !thumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, thumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    thumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, thumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const images = [
    "/trendy-tshirt.png",
    "/stylish-jean.png",
    "/cozy-sweater.png",
    "/classic-sneaker.jpg",
    "/trendy-tshirt.png",
    "/stylish-jean.png",
    "/cozy-sweater.png",
    "/classic-sneaker.jpg",
    "/trendy-tshirt.png",
    "/stylish-jean.png",
    "/cozy-sweater.png",
    "/classic-sneaker.jpg",
  ];

  const relatedProducts = [
    {
      id: "1",
      name: "Related T-Shirt 1",
      price: 24.99,
      image: "/trendy-tshirt.png",
    },
    {
      id: "2",
      name: "Related T-Shirt 2",
      price: 22.99,
      salePrice: 16.99,
      image: "/stylish-jean.png",
    },
    {
      id: "3",
      name: "Related T-Shirt 3",
      price: 26.99,
      salePrice: 16.99,
      image: "/cozy-sweater.png",
    },
    {
      id: "4",
      name: "Related T-Shirt 4",
      price: 23.99,
      salePrice: 16.99,
      image: "/classic-sneaker.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Image Carousel */}
        <div className="space-y-4">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-square min-w-0 flex-[0_0_100%]"
                  >
                    <img
                      src={src}
                      alt={`Product Image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          {/* Thumbnails */}
          <div className="overflow-hidden" ref={thumbsRef}>
            <div className="flex -ml-2">
              {images.map((src, index) => (
                <button
                  key={index}
                  className={`relative aspect-square min-w-0 flex-[0_0_25%] cursor-pointer overflow-hidden rounded p-2 ${
                    index === selectedIndex
                      ? "ring-1 ring-primary scale-95"
                      : ""
                  }`}
                  onClick={() => onThumbClick(index)}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">I Want To T-Shirt</h1>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">$19.00</span>
            <span className="text-sm text-gray-500 line-through">$29.00</span>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Separator />
          <div className="flex items-center space-x-4">
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
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value)))
                }
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
            <Button className="h-10 px-8">Add to cart</Button>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <Separator />
          <div className="space-y-2">
            <p>
              <strong>SKU:</strong> N/A
            </p>
            <p>
              <strong>Categories:</strong> Clothing, T-Shirts
            </p>
            <p>
              <strong>Tags:</strong> Modern, Design
            </p>
          </div>
          <Separator />
          <Tabs defaultValue="description" className="w-full">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional">
                Additional Information
              </TabsTrigger>
              <TabsTrigger value="reviews">Reviews (0)</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </TabsContent>
            <TabsContent value="additional" className="mt-4">
              <p>
                Additional product information goes here. This could include
                details about materials, sizing, care instructions, etc.
              </p>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <p>There are no reviews yet.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              id={product.id}
              image={product.image}
              price={product.price}
              salePrice={product.salePrice}
              category="T-Shirts"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
