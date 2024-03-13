import "./globals.css";

import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

import MainWrapper from "@/components/MainWrapper";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateo Presa Castro",
  description: "Mateo Presa Castro's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${inter.className} flex min-h-screen flex-col bg-white tracking-tight text-black antialiased dark:bg-neutral-900`,
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class">
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
