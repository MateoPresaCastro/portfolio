import Link from "next/link";

import Title from "@/components/Title";
import Text from "@/components/Text";

import { DashIcon } from "@radix-ui/react-icons";

export default function Position() {
  return (
    <>
      <Title>Projects</Title>
      <Text>
        <Link
          href="https://www.wheretomove.eu"
          target="_blank"
          className="flex w-fit cursor-pointer items-center justify-start underline decoration-neutral-300 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-600 dark:decoration-neutral-500 dark:hover:decoration-neutral-300"
        >
          <DashIcon className="mr-1" />
          wheretomove.eu
        </Link>
      </Text>
    </>
  );
}
