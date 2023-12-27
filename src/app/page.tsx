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
        <span className={`${newsreader.className} text-[19px]`}>Music</span>,
        and
        <span className={`${newsreader.className} text-[19px]`}>
          {" "}
          software.
        </span>
      </div>
    ),
  },
  {
    title: "Current position",
    content: "Software engineer @ Viaplay's payments team.",
  },
  {
    title: "Discography",
    titleClass:
      "cursor-pointer underline underline-offset-[2.5px] decoration-neutral-600 hover:decoration-neutral-400 w-auto transition-all duration-300 decoration-1",
    content: "Reezy, Eladio Carrion, Morad, Yung Beef...",
    isTitleLink: true,
  },
  {
    title: "Connect",
    content: "mateopresacastro@gmail.com",
    descClass:
      "cursor-pointer underline underline-offset-[2.5px] decoration-neutral-600 hover:decoration-neutral-400 w-auto transition-all duration-300 decoration-1",
  },
];

export default function Home() {
  let delay = 0;
  return (
    <main className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="max-w-2xl text-neutral-300">
          {data.map((d, i) => {
            delay = i * 0.1;
            return (
              <Card
                key={d.title}
                title={d.title}
                content={d.content}
                descClass={d.descClass}
                titleClass={d.titleClass}
                delay={delay}
                isTitleLink={d.isTitleLink}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  content,
  descClass,
  titleClass,
  delay,
  isTitleLink,
}: {
  title: string;
  content: string | React.JSX.Element;
  descClass?: string;
  titleClass?: string;
  delay: number;
  isTitleLink?: boolean;
}) {
  return (
    <>
      <div
        className="translate-y-[10px] animate-moveUp"
        style={{ animationDelay: `${delay}s` }}
      >
        <h1
          className={`animate-fadeIn opacity-0 ${titleClass ?? ""}`}
          style={{ animationDelay: `${delay}s` }}
        >
          {isTitleLink ? (
            <Link href="/discography">{title}</Link>
          ) : (
            <div>{title}</div>
          )}
        </h1>
      </div>
      <div
        className="translate-y-[10px] animate-moveUp"
        style={{ animationDelay: `${delay}s` }}
      >
        <div
          className={`mb-16 font-light text-neutral-400 opacity-0 ${
            descClass ?? ""
          } animate-fadeIn`}
          style={{ animationDelay: `${delay}s` }}
        >
          {content}
        </div>
      </div>
    </>
  );
}
