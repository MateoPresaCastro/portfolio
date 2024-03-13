import Link from "next/link";

import Title from "@/components/Title";
import Text from "@/components/Text";

export default function Connect() {
  return (
    <>
      <Title>Connect</Title>
      <Text>
        <Link
          href="mailto:mateopresacastro@gmail.com"
          className="w-fit cursor-pointer items-center justify-start underline decoration-neutral-300 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-600 dark:decoration-neutral-500 dark:hover:decoration-neutral-300"
        >
          mateopresacastro@gmail.com
        </Link>
      </Text>
    </>
  );
}
