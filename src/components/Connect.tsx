import Link from "next/link";

export default function Connect() {
  return (
    <>
      <h2>Connect</h2>
      <Link
        href={"mailto:mateopresacastro@gmail.com"}
        className="mb-16 w-auto cursor-pointer font-light text-neutral-300 underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-300"
      >
        mateopresacastro@gmail.com
      </Link>
    </>
  );
}
