import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex h-16 items-center justify-center">
      <div className="flex w-96 max-w-2xl items-center justify-center text-base text-neutral-300 dark:text-neutral-500">
        <Link
          target="_blank"
          href="https://github.com/MateoPresaCastro/portfolio"
        >
          <FaGithub className="mx-3 cursor-pointer text-sm transition-all duration-300 hover:text-neutral-400 dark:hover:text-neutral-500" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/mateopresa/">
          <FaLinkedin className="mx-3 cursor-pointer text-sm transition-all duration-300 hover:text-neutral-400 dark:hover:text-neutral-500" />
        </Link>
      </div>
    </footer>
  );
}
