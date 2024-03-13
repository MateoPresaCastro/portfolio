import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { It } from "@/lib/fonts";

export default function BackButton() {
  return (
    <Link href="/" className="mb-2 ml-1 flex w-16 items-center">
      <ArrowLeftIcon className="text-neutral-500 " />
      <p className="ml-1 w-fit cursor-pointer text-neutral-600 underline decoration-neutral-300 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-600 dark:text-neutral-300 dark:decoration-neutral-500 dark:hover:decoration-neutral-300">
        <It>Back</It>
      </p>
    </Link>
  );
}
