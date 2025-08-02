import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

export interface CarouselProps {
  src: StaticImageData;
  title: string;
  subtitle: string;
  alt: string;
}

export default function CarouselContentItem({ item }: { item: CarouselProps }) {
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
