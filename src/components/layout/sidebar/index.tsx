"use client";

import { useEffect } from "react";
import { useSidebar } from "@/providers/sidebar-provider";
import { Logo, Navbar, SocialMenu } from "@/components/blocks/sidebar";

export default function Sidebar() {
  const { close } = useSidebar();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.innerWidth < 1280) close();
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, [close]);

  return (
    <aside className="hidden xl:block fixed top-0 left-0 w-72 h-screen bg-sidebar border-r border-sidebar-muted z-30">
      <div className="relative h-full flex flex-col px-8 py-14">
        <Logo />
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-2">
          <SocialMenu />
          <p className="text-muted-foreground/50 tracking-wider text-base">
            &copy; {new Date().getFullYear()} YGE. All rights reserved.
          </p>
        </div>
      </div>
    </aside>
  );
}
