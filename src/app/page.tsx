import Section from "@/components/Section";
import data from "./data";

export default function Home() {
  let delay = 0;
  return (
    <main className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10 max-w-2xl text-neutral-50">
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
    </main>
  );
}