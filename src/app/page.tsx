import { Newsreader, Inter } from "next/font/google";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const inter = Inter({ subsets: ["latin"] });

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
    title: "Sound influences",
    content: "Curtis Roads, Igor Stravinsky, Travis Scott, Drake.",
  },
  {
    title: "Connect",
    content: "mateopresacastro@gmail.com",
    customClass: "no-underline hover:underline transition-all duration-300",
  },
];

export default function Home() {
  let delay = 0;
  return (
    <main className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="max-w-2xl text-neutral-300">
          {data.map((d, i) => {
            if (i !== 0) {
              delay += 0.1;
            }
            return (
              <Card
                key={d.title}
                title={d.title}
                content={d.content}
                customClass={d.customClass}
                delay={delay}
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
  customClass,
  delay,
}: {
  title: string;
  content: string | React.JSX.Element;
  customClass?: string;
  delay: number;
}) {
  return (
    <>
      <div
        className="translate-y-[10px] animate-moveUp"
        style={{ animationDelay: `${delay}s` }}
      >
        <h1
          className="animate-fadeIn font-semibold opacity-0"
          style={{ animationDelay: `${delay}s` }}
        >
          {title}
        </h1>
      </div>
      <div
        className="translate-y-[10px] animate-moveUp"
        style={{ animationDelay: `${delay}s` }}
      >
        <div
          className={`mb-16 font-light opacity-0 ${
            customClass ?? ""
          } animate-fadeIn`}
          style={{ animationDelay: `${delay}s` }}
        >
          {content}
        </div>
      </div>
    </>
  );
}

function getDelay(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function Quote({ textData, author }: { textData: string; author: string }) {
  return (
    <>
      <div className="mt-5 flex flex-row items-center justify-start">
        <div className="h-10 w-1 bg-neutral-800"></div>
        <div className="text-s ml-4 flex flex-col">
          <p className="text-start leading-relaxed text-neutral-400">
            {textData}
          </p>
          <p className="mt-1 text-left text-neutral-200">- Igor Stravinsky</p>
        </div>
      </div>
    </>
  );
}
