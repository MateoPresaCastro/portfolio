import Link from "next/link";

export default function Credits() {
  return (
    <>
      <Link
        href="/credits"
        className="w-auto cursor-pointer underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-300"
      >
        Credits
      </Link>
      <p className={`mb-16 font-light text-neutral-300`}>
        Reezy, Eladio Carrion, Morad, Yung Beef...
      </p>
    </>
  );
}
