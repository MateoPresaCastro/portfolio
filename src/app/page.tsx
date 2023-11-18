import { newsreader } from "./layout";

const quote = <Quote textData={`"Homo faber suae quisque fortunae."`} />;

const data = [
  {
    title: "Mateo Presa Castro",
    content: (
      <div>
        Pursuing the{" "}
        <span className={`${newsreader.className} text-[19px]`}>true</span>, the
        <span className={`${newsreader.className} text-[19px]`}> good</span> and
        the
        <span className={`${newsreader.className} text-[19px]`}>
          {" beautiful"}
        </span>
        {". Sound and software construction. "}
        <span className={`${newsreader.className} text-[19px]`}></span>
        <div className={`${newsreader.className} text-[19px]`}>{quote}</div>
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
  return (
    <>
      <div
        className="animate-moveUp translate-y-[10px]"
        style={{ animationDelay: `${titleDelay}s` }}
      >
        <h1
          className="animate-fadeIn text-lg opacity-0"
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

function Quote({ textData }: { textData: string }) {
  return (
    <div className="mt-3 flex flex-row items-center justify-start">
      <div className="h-10 w-0.5 bg-neutral-800"></div>
      <p className="ml-5 text-center text-lg text-neutral-400 transition duration-300 ease-in-out hover:text-neutral-300">
        {textData}
      </p>
    </div>
  );
}
