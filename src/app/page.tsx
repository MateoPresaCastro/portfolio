import { Newsreader, Inter } from "next/font/google";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const inter = Inter({ subsets: ["latin"] });

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic",
});

const quote = (
  <Quote
    textData={`"Well, in art, as in everything else, one can build only upon a resistant foundation. Whatever constantly gives way to pressure renders movement impossible."`}
    author={`Igor Stravinsky`}
  />
);

const data = [
  {
    title: "Mateo Presa Castro",
    content: (
      <div>
        {/* Pursuing the{" "} */}
        <span className={`${newsreader.className} text-[19px]`}>Sound</span>,
        and
        <span className={`${newsreader.className} text-[19px]`}>
          {" "}
          software.
        </span>
        {/* the
        <span className={`${newsreader.className} text-[19px]`}>
          {" beautiful"}
        </span>
        {". Sound and software construction. "}
        <span className={`${newsreader.className} text-[19px]`}></span> */}
        {/* <div className="flex flex-row items-center justify-center">
          <div className={`${newsreader.className}`}>{quote}</div>
        </div> */}
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
    customClass: "no-underline hover:underline",
  },
];

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="max-w-2xl text-neutral-300">
          {data.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              content={d.content}
              customClass={d.customClass}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  content,
  customClass,
}: {
  title: string;
  content: string | React.JSX.Element;
  customClass?: string;
}) {
  const titleDelay = getDelay(0.3, 1.7);
  const contentDelay = getDelay(0.6 + titleDelay, 1.3 + titleDelay);
  // const titleDelay = getDelay(0, 0);
  // const contentDelay = getDelay(0, 0);
  return (
    <>
      <div
        className="translate-y-[10px] animate-moveUp"
        style={{ animationDelay: `${titleDelay}s` }}
      >
        <h1
          className="animate-fadeIn font-semibold opacity-0"
          style={{ animationDelay: `${titleDelay}s` }}
        >
          {title}
        </h1>
      </div>
      <div className="translate-y-[10px]">
        <div
          className={`mb-16 font-light opacity-0 ${
            customClass ?? ""
          } animate-fadeIn`}
          style={{ animationDelay: `${contentDelay}s` }}
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
        <div className="ml-4 flex flex-col text-[19px]">
          <p className="text-start leading-relaxed text-neutral-400">
            {textData}
          </p>
          <p className="mt-1 text-left text-neutral-400">- Igor Stravinsky</p>
        </div>
      </div>
    </>
  );
}
