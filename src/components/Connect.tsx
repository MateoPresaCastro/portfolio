import Link from "next/link";

export default function Connect() {
  return (
    <>
      <h2>Connect</h2>
      <Link
        href="mailto:mateopresacastro@gmail.com"
        className="w-fit cursor-pointer items-center justify-start font-light text-neutral-600 underline decoration-neutral-400 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-600 dark:text-neutral-300 dark:decoration-neutral-500 dark:hover:decoration-neutral-300"
      >
        mateopresacastro@gmail.com
      </Link>
    </>
  );
}
