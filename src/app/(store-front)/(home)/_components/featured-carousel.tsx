"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getHomeSliders } from "@/lib/api";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DataItem } from "../../../../../types/response";
import { ASSETS_URL } from "@/lib/const";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedCarousel() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState<DataItem[]>([]);

  const getData = async () => {
    setIsLoading(true);
    const data = await getHomeSliders();
    setFeaturedProducts(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="py-1 md:py-12 bg-gray-100">
      <div className="container mx-auto px-1  md:px-4">
        {isLoading && <Skeleton className="aspect-[4/1] " />}
        {!isLoading && (
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
                      src={`${ASSETS_URL}/${product.image.formats.large.url}`}
                      alt={product.image.formats.large.name}
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
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        )}
      </div>
    </section>
  );
}
