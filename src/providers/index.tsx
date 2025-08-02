"use client";

import { envConfig } from "@/lib/env";
import { Toaster } from "sonner";

import ThemeProvider from "@/providers/theme-provider";
import SidebarProvider from "@/providers/sidebar-provider";
import TopbarProvider from "@/providers/topbar-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={envConfig.DEFAULT_THEME} enableSystem>
      <SidebarProvider>
        <TopbarProvider>{children}</TopbarProvider>
      </SidebarProvider>
      <Toaster duration={2000} position="top-center" richColors />
    </ThemeProvider>
  );
}
