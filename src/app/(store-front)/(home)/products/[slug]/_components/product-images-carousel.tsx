"use client";

import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ProductImage } from "../../../../../../../types/response";
import { ASSETS_URL } from "@/lib/const";
import Image from "next/image";

export const ProductImagesCarousel = ({
  images,
}: {
  images: ProductImage[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images?.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square min-w-0 flex-[0_0_100%]"
              >
                <Image
                  src={`${ASSETS_URL}/${image.url}`}
                  alt={image.name}
                  width={1200}
                  height={1200}
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
        <div className="flex">
          {images?.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square min-w-0 flex-[0_0_30%] cursor-pointer overflow-hidden rounded p-2 ${
                index === selectedIndex ? "ring-1 ring-primary scale-95" : ""
              }`}
              onClick={() => onThumbClick(index)}
            >
              <Image
                src={`${ASSETS_URL}/${image.url}`}
                width={150}
                height={150}
                alt={image.name}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
