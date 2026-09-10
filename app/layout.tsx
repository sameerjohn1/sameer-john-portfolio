import type { Metadata } from "next";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/700.css";
import "./globals.css";
import { AppThemeProvider } from "@/components/AppThemeProvider";
import Script from "next/script";

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

        <Script
          src="https://ai-customer-support-b4dw.vercel.app/chatBot.js"
          data-owner-id="usr_110976091308425731"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
