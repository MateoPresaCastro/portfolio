import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic",
});

export default function Name() {
  return (
    <>
      <h2>Mateo Presa Castro</h2>
      <div className={`mb-16 font-light text-neutral-300`}>
        <Italic>Music</Italic>
        {" and "}
        <Italic>software.</Italic>
      </div>
    </>
  );
}

function Italic({ children }: { children: string }) {
  return (
    <span className={`${newsreader.className} text-[19px]`}>{children}</span>
  );
}
