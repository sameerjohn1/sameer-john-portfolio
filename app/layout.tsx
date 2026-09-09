import type { Metadata } from "next";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/700.css";
import "./globals.css";
import { AppThemeProvider } from "@/components/AppThemeProvider";

export const metadata: Metadata = {
  title: "Sameer John — Portfolio",
  description:
    "A premium portfolio for Sameer John, Director of Product Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
