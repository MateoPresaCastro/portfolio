import Image from "next/image";
import Link from "next/link";
import SONG_DATA from "@/app/credits/song-data";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SongMetaData from "./SongMetaData";

export default function MyCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-72 max-w-sm md:w-full lg:md:w-full"
    >
      <CarouselContent>
        {SONG_DATA.map(
          (
            { image, album, artist, song, year, youtubeLink, producedBy },
            index,
          ) => (
            <CarouselItem key={index} className="basis-72 md:basis-96">
              <Image
                src={image}
                width={550}
                height={550}
                alt="Song cover art"
                priority
                className="ml-1.5"
              />
              <SongMetaData
                album={album}
                artist={artist}
                song={song}
                year={year}
                youtubeLink={youtubeLink}
                producedBy={producedBy}
              />
            </CarouselItem>
          ),
        )}
      </CarouselContent>
      <CarouselPrevious
        variant={"ghost"}
        className="text-neutral-200 transition-all duration-300 hover:bg-neutral-900 hover:text-neutral-500"
      />
      <CarouselNext
        variant={"ghost"}
        className="text-neutral-200 transition-all duration-300 hover:bg-neutral-900 hover:text-neutral-500"
      />
    </Carousel>
  );
}
