import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic",
  display: "swap",
  adjustFontFallback: false,
});

export function It({ children }: { children: string }) {
  return (
    <span className={`${newsreader.className} flex flex-row text-[19px]`}>
      {children}
    </span>
  );
}
