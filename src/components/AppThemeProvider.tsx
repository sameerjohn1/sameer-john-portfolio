"use client";

import { ThemeProvider } from "@/context/ThemeContext";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
