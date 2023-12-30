import Link from "next/link";
import data from "./data";

export default function Home() {
  let delay = 0;
  return (
    <main className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="max-w-2xl text-neutral-100">
          {data.map((d, i) => {
            delay = i * 0.1;
            return (
              <Section
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

function Section({
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
            <Link href="/credits">{title}</Link>
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
          className={`mb-16 font-light text-neutral-300 opacity-0 ${
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
