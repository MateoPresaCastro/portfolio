import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/" className="mb-2 flex w-16 items-center">
      <ArrowLeftIcon className="text-neutral-500"/>
      <p className="text-neutral-300  text-sm ml-1 w-auto cursor-pointer underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-400">
        Back
      </p>
    </Link>
  );
}
