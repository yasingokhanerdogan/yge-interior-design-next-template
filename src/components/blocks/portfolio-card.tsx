import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface PortfolioCardProps {
  portfolio: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  index: number;
}

export function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <Link href={portfolio.link} className="relative h-96 group overflow-hidden">
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 ease-in-out z-10" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center group-hover:bottom-36 transition-all duration-300 ease-in-out whitespace-nowrap z-20">
        <h4 className="text-white text-3xl uppercase tracking-widest">{portfolio.title}</h4>
        <h1 className="text-6xl font-medium text-white tracking-wider">{portfolio.title}</h1>
        <ArrowRightIcon className="text-white size-8 mt-12 -mb-16 -ml-2" />
      </div>

      <Image
        src={portfolio.image}
        fill
        className="object-cover"
        quality={75}
        alt={portfolio.title}
        sizes="(max-width: 768px) 100vw, 33vw"
        placeholder="blur"
        blurDataURL={portfolio.image}
      />
    </Link>
  );
}
