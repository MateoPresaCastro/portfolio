import Link from "next/link";

export default function Credits() {
  return (
    <>
      <Link
        href="/credits"
        className="flex w-fit cursor-pointer items-center justify-start font-medium underline decoration-neutral-300 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-600 dark:decoration-neutral-500 dark:hover:decoration-neutral-300"
      >
        Credits
      </Link>
      <p className="mb-8  text-neutral-600 dark:text-neutral-300">
        Reezy, Eladio Carrion, Morad, Yung Beef...
      </p>
    </>
  );
}
