"use client";

import { usePathname } from "next/navigation";
import { paths } from "@/lib/routes";

import { Header, Sidebar, Footer } from "@/components/layout";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="relative h-screen">
      <div className="flex">
        <Sidebar />
        <main className="xl:ml-72 xl:w-[calc(100%-288px)] min-h-screen transition-all duration-300 ease-in-out flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
