const data = [
  {
    title: "Mateo Presa Castro",
    content: "Pursuing craft, truth and beauty.",
  },
  {
    title: "Now",
    content: "Backend software engineer @ Viaplay's payments team.",
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
        <div className="max-w-2xl text-neutral-200">
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
  content: string;
  customClass?: string;
}) {
  const titleDelay = getDelay(0.3, 0.6);
  const contentDelay = getDelay(0.1 + titleDelay, 0.3 + titleDelay);
  return (
    <>
      <div
        className="animate-moveUp translate-y-[10px]"
        style={{ animationDelay: `${titleDelay}s` }}
      >
        <h1
          className="animate-fadeIn mb-2 opacity-0"
          style={{ animationDelay: `${titleDelay}s` }}
        >
          {title}
        </h1>
      </div>
      <div
        className="animate-moveUp translate-y-[10px]"
        style={{ animationDelay: `${titleDelay}s` }}
      >
        <p
          className={`mb-12 font-light opacity-0 ${
            customClass ?? ""
          } animate-fadeIn`}
          style={{ animationDelay: `${contentDelay}s` }}
        >
          {content}
        </p>
      </div>
    </>
  );
}

function getDelay(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
