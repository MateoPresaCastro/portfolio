import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-1 border-5 flex h-16 items-center justify-center border-zinc-200">
      <div className="flex w-96 max-w-2xl items-center justify-center font-light text-neutral-500">
        <a target="_blank" href="https://github.com/MateoPresaCastro">
          <FaGithub className="mx-6 cursor-pointer text-xl transition-all duration-300 hover:text-neutral-200" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/mateopresa/">
          <FaLinkedin className="mx-6 cursor-pointer text-xl transition-all duration-300 hover:text-neutral-200" />
        </a>
      </div>
    </footer>
  );
}
