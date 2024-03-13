import { It } from "@/lib/fonts";

export default function Name() {
  return (
    <>
      <h2 className="font-medium">Mateo Presa Castro</h2>
      <div className={`mb-8 text-neutral-600 dark:text-neutral-300`}>
        <It>Music</It>
        {" and "}
        <It>software.</It>
      </div>
    </>
  );
}
