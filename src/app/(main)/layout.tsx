"use client";

import { usePathname } from "next/navigation";
import { paths } from "@/lib/routes";

import { Header, Sidebar, Footer } from "@/components/layout";
import { cn } from "@/lib/utils";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <div className="flex">
        <Sidebar />
        <div className="xl:ml-72 xl:w-[calc(100%-288px)] flex-1">
          <main className={cn(pathname === paths.MAIN.HOME ? "min-h-screen" : "min-h-[calc(100vh-3.5rem)]")}>
            {children}
          </main>
          {pathname !== paths.MAIN.HOME && <Footer />}
        </div>
      </div>
    </div>
  );
}
