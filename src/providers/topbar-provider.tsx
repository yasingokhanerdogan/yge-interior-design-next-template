"use client";

import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import Colors from "tailwindcss/colors";
import useTheme from "@/hooks/use-theme";

interface TopbarProviderProps {
  children: React.ReactNode;
}

export default function TopbarProvider({ children }: TopbarProviderProps) {
  const { themeMounted, theme } = useTheme();

  if (!themeMounted) return null;

  return (
    <ProgressProvider
      height="3px"
      color={theme === "light" ? Colors.stone[400] : Colors.stone[400]}
      options={{ showSpinner: false }}
      shallowRouting
      spinnerPosition="top-left"
    >
      {children}
    </ProgressProvider>
  );
}
