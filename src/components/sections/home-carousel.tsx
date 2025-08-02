"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import carousel1 from "~/1.jpg";
import carousel2 from "~/2.jpg";
import carousel3 from "~/3.jpg";
import { Button } from "@/components/ui/button";

type CarouselItem = {
  src: StaticImageData;
  title: string;
  subtitle: string;
  alt: string;
};

type CarouselNavigationProps = {
  count: number;
  current: number;
};

const carouselItems: CarouselItem[] = [
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

function CarouselContentItem({ item }: { item: CarouselItem }) {
  return (
    <div className="relative cursor-default select-none">
      <Image src={item.src} alt={item.alt} quality={100} className="object-cover h-screen" />
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <h4 className="text-white text-2xl uppercase tracking-widest">{item.subtitle}</h4>
        <h1 className="text-7xl font-medium text-white tracking-wider">{item.title}</h1>
        <Button size="lg" className="uppercase tracking-widest mt-4">
          View Project
        </Button>
      </div>
    </div>
  );
}

function CarouselNavigation({ count, current }: CarouselNavigationProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={cn("w-2 h-2 bg-white rounded-full", current === index + 1 && "bg-primary")} />
      ))}
    </div>
  );
}

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
