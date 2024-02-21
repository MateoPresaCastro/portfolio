import Link from "next/link";
import { DashIcon } from "@radix-ui/react-icons";
export default function Position() {
  return (
    <>
      <h2>Projects</h2>
      <div className="mb-8 font-light text-neutral-300">
        <Link
          href="https://www.wheretomove.eu"
          target="_blank"
          className="flex w-auto cursor-pointer items-center justify-start font-light text-neutral-300 underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-300"
        >
          <DashIcon className="mr-1" />
          wheretomove.eu
        </Link>
        <Link
          href="https://www.wheretomove.eu"
          target="_blank"
          className="mb-8 flex w-auto cursor-pointer items-center justify-start font-light text-neutral-300 underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-300"
        >
          <DashIcon className="mr-1" />
          convolve.me
        </Link>
      </div>
    </>
  );
}