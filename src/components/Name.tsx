import { Italic } from "@/fonts";

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
