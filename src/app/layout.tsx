import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

export const newsreader = Newsreader({ subsets: ["latin"], style: "italic" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateo Presa Castro",
  description: "Pursuing purpose, truth, and beauty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
