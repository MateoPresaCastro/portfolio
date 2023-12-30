import { Newsreader } from "next/font/google";
import type { ReactNode } from "react";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic",
  display: "swap",
  adjustFontFallback: false,
});

export function Italic({ children }: { children: string | ReactNode }) {
  return (
    <span className={`${newsreader.className} text-[19px]`}>{children}</span>
  );
}
