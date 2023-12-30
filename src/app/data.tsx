import { Newsreader } from "next/font/google";
import Link from "next/link";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic",
});

const data = [
  {
    title: "Mateo Presa Castro",
    content: (
      <div>
        <span className={`${newsreader.className} text-[19px]`}>Music</span> and
        <span className={`${newsreader.className} text-[19px]`}>
          {" "}
          software.
        </span>
      </div>
    ),
  },
  {
    title: "Current position",
    content: "Software engineer @ Viaplay.",
  },
  {
    title: "Credits",
    titleClass:
      "cursor-pointer underline underline-offset-[2.5px] decoration-neutral-600 hover:decoration-neutral-400 w-auto transition-all duration-300 decoration-1",
    content: "Reezy, Eladio Carrion, Morad, Yung Beef...",
    isTitleLink: true,
  },
  {
    title: "Connect",
    content: (
      <Link href={"mailto:mateopresacastro@gmail.com"}>
        mateopresacastro@gmail.com
      </Link>
    ),
    descClass:
      "cursor-pointer underline underline-offset-[2.5px] decoration-neutral-600 hover:decoration-neutral-400 w-auto transition-all duration-300 decoration-1",
  },
];

export default data;
