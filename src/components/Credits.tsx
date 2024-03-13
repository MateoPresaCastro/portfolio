import Link from "next/link";

import Title from "@/components/Title";
import Text from "@/components/Text";

export default function Credits() {
  return (
    <>
      <Title>
        <Link
          href="/credits"
          className="flex w-fit cursor-pointer items-center justify-start font-medium underline decoration-neutral-300 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-600 dark:decoration-neutral-500 dark:hover:decoration-neutral-300"
        >
          Music
        </Link>
      </Title>

      <Text>Reezy, Eladio Carrion, Morad, Yung Beef...</Text>
    </>
  );
}
