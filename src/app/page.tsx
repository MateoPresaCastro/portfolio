const data = [
  {
    title: "Mateo Presa Castro",
    content: "Pursuing purpose, truth and beauty.",
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
      <div className="animate-fadeIn m-10">
        <div className=" animate-moveUp max-w-2xl text-neutral-200">
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
  return (
    <>
      <h1 className="mb-2">{title}</h1>
      <p className={`mb-12 font-light ${customClass}`}>{content}</p>
    </>
  );
}
