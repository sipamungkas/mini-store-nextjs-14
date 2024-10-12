"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
const featuredProducts = [
  { id: 1, name: "Special Discount", image: "/mini-shop-discount-banner.png" },
  {
    id: 2,
    name: "Coffe Bean Discount",
    image: "/mini-shop-coffe-bean-banner.png",
  },
  {
    id: 3,
    name: "Frozen Food Discount",
    image: "/mini-shop-frozen-food-banner.png",
  },
];
export default function FeaturedCarousel() {
  return (
    <section className="py-1 md:py-12 bg-gray-100">
      <div className="container mx-auto px-1  md:px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 10000,
              stopOnInteraction: true,
              stopOnFocusIn: true,
            }),
          ]}
          className="w-full  mx-auto"
        >
          <CarouselContent>
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id}>
                {/* aspect ration image 4/1 width: 1024 height: 302 */}
                <div className="relative aspect-[4/1]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                      <h2 className="text-4xl font-bold">{product.name}</h2>
                    </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block " />
        </Carousel>
      </div>
    </section>
  );
}
