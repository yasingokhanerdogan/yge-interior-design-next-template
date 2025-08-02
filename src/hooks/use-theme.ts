"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export type Theme = "light" | "dark" | "system";

export interface ThemeResponse {
  themeMounted: boolean;
  theme: Theme;
  systemTheme: Omit<Theme, "system">;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export default function useTheme(): ThemeResponse {
  const [themeMounted, setThemeMount] = useState(false);
  const { theme, setTheme, systemTheme } = useNextTheme();

  useEffect(() => {
    setThemeMount(true);
  }, []);

  return {
    themeMounted,
    theme: theme as Theme,
    systemTheme: systemTheme as Theme,
    setTheme: setTheme as Dispatch<SetStateAction<Theme>>,
  };
}
