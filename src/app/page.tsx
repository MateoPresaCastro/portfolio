import Name from "@/components/Name";
import Position from "@/components/Position";
import Credits from "@/components/Credits";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10 max-w-2xl text-neutral-50">
        <Name />
        <Position />
        <Credits />
        <Connect />
      </div>
    </main>
  );
}
