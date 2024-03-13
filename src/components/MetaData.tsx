import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

interface MetaDataProps {
  artist: string;
  song: string;
  album?: string;
  year: string;
  producedBy: string;
  youtubeLink: string;
}

export default function MetaData(p: MetaDataProps) {
  return (
    <div className="ml-2 mt-2 flex flex-col justify-start ">
      <Link
        href={p.youtubeLink}
        className="flex items-center justify-start"
        target="_blank"
      >
        <p className="w-auto cursor-pointer font-semibold text-neutral-50 underline decoration-neutral-500 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-300">
          {`${p.artist} - ${p.song}`}
        </p>
        <HiArrowUpRight className="ml-1 text-sm text-neutral-500" />
      </Link>
      {p.album && <p className="text-neutral-300">{p.album}</p>}
      <p className="text-sm text-neutral-500">{p.year}</p>
      <p className="text-xs text-neutral-500">{`Produced by ${p.producedBy}`}</p>
    </div>
  );
}
