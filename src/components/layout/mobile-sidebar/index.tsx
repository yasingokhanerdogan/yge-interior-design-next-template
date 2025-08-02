"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-provider";
import { Navbar } from "@/components/blocks/sidebar";

export default function MobileSidebar() {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={cn(
        "xl:hidden fixed top-14 left-0 w-72 h-[calc(100vh-3.5rem)] bg-sidebar border-r border-sidebar-muted z-30 transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="relative h-full flex flex-col px-8 py-8">
        <Navbar />

        <div className="mt-auto flex flex-col items-center justify-center gap-2">
          <p className="text-muted-foreground/50 tracking-wider text-base">
            &copy; {new Date().getFullYear()} YGE. All rights reserved.
          </p>
        </div>
      </div>
    </aside>
  );
}
