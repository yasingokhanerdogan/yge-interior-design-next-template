import { Metadata } from "next";
import HomeCarousel from "@/components/sections/home-carousel";

export const metadata: Metadata = {};

export default function HomePage() {
  return <HomeCarousel />;
}
