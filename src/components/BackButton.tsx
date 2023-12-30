import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Italic } from "@/lib/fonts";

export default function BackButton() {
  return (
    <Link href="/" className="mb-2 ml-1 flex w-16 items-center">
      <ArrowLeftIcon className="text-neutral-500 " />
      <Italic>
        <p className="ml-1 w-auto cursor-pointer text-neutral-300 underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-300">
          Back
        </p>
      </Italic>
    </Link>
  );
}
