import Link from "next/link";

export default function Section({
  title,
  content,
  descClass,
  titleClass,
  delay,
  isTitleLink,
}: {
  title: string;
  content: string | React.JSX.Element;
  descClass?: string;
  titleClass?: string;
  delay: number;
  isTitleLink?: boolean;
}) {
  return (
    <>
      <div
        className="translate-y-[10px] animate-moveUp"
        style={{ animationDelay: `${delay}s` }}
      >
        <h1
          className={`animate-fadeIn opacity-0 ${titleClass ?? ""}`}
          style={{ animationDelay: `${delay}s` }}
        >
          {isTitleLink ? (
            <Link href="/credits">{title}</Link>
          ) : (
            <div>{title}</div>
          )}
        </h1>
      </div>
      <div
        className="translate-y-[10px] animate-moveUp"
        style={{ animationDelay: `${delay}s` }}
      >
        <div
          className={`mb-16 font-light text-neutral-300 opacity-0 ${
            descClass ?? ""
          } animate-fadeIn`}
          style={{ animationDelay: `${delay}s` }}
        >
          {content}
        </div>
      </div>
    </>
  );
}
