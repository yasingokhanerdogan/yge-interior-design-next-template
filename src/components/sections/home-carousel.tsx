"use client";

import { useEffect, useState } from "react";

import type { CarouselProps } from "@/components/blocks/home-carousel/carousel-item";
import { CarouselContentItem, CarouselNavigation } from "@/components/blocks/home-carousel";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import carousel1 from "~/1.jpg";
import carousel2 from "~/2.jpg";
import carousel3 from "~/3.jpg";

const carouselItems: CarouselProps[] = [
  {
    src: carousel1,
    title: "Art Museum",
    subtitle: "Engineer",
    alt: "Art Museum",
  },
  {
    src: carousel2,
    title: "Arch Studio",
    subtitle: "Architect",
    alt: "Arch Studio",
  },
  {
    src: carousel3,
    title: "Arch Studio",
    subtitle: "Architect",
    alt: "Arch Studio",
  },
];

export default function HomeCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <CarouselContentItem item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselNavigation count={count} current={current} />
    </div>
  );
}
