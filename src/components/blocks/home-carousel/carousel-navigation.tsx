import { cn } from "@/lib/utils";

export interface CarouselNavigationProps {
  count: number;
  current: number;
}

export default function CarouselNavigation({ count, current }: CarouselNavigationProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={cn("w-2 h-2 bg-white rounded-full", current === index + 1 && "bg-primary")} />
      ))}
    </div>
  );
}
