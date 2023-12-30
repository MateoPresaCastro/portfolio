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

export default function MetaData({
  artist,
  song,
  album,
  year,
  producedBy,
  youtubeLink,
}: MetaDataProps) {
  return (
    <div className="ml-2 mt-2 flex flex-col justify-start font-light">
      <Link
        href={youtubeLink}
        className="flex items-center justify-start"
        target="_blank"
      >
        <p className="w-auto cursor-pointer font-semibold text-neutral-50 underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-400">
          {`${artist} - ${song}`}
        </p>
        <HiArrowUpRight className="ml-1 text-sm text-neutral-400" />
      </Link>
      {album && <p className="text-neutral-300">{album}</p>}
      <p className="text-sm text-neutral-400">{year}</p>
      <p className="text-xs text-neutral-500">{`Produced by ${producedBy}`}</p>
    </div>
  );
}
