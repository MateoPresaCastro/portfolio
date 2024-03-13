import Link from "next/link";
import { DashIcon } from "@radix-ui/react-icons";
export default function Position() {
  return (
    <>
      <h2>Projects</h2>
      <div className="mb-8 font-light text-neutral-600 dark:text-neutral-300">
        <Link
          href="https://www.wheretomove.eu"
          target="_blank"
          className="flex w-fit cursor-pointer items-center justify-start underline decoration-neutral-400 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-600 dark:decoration-neutral-500 dark:hover:decoration-neutral-300"
        >
          <DashIcon className="mr-1" />
          wheretomove.eu
        </Link>
      </div>
    </>
  );
}
