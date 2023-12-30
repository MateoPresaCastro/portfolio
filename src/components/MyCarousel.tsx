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

export default function MyCarousel() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-72 max-w-sm md:w-full lg:md:w-full"
      >
        <CarouselContent>
          {SONG_DATA.map(
            ({ image, album, artist, song, year, youtubeLink }, index) => (
              <CarouselItem key={index} className="basis-72 md:basis-96">
                <div className="relative">
                  <Image
                    src={image}
                    width={550}
                    height={550}
                    alt="Song cover art"
                    priority
                    className="ml-1.5"
                    unoptimized
                  />
                </div>
                <div className="flex justify-start">
                  <div className="ml-2 mt-2">
                    <Link
                      href={youtubeLink}
                      target="_blank"
                      className="flex items-center justify-start"
                    >
                      <p className="w-auto cursor-pointer text-neutral-100 underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-400">
                        {`${artist} - ${song}`}
                      </p>
                      <HiArrowUpRight className="ml-1 text-sm text-neutral-400" />
                    </Link>
                    <p className="className= text-neutral-300">{album}</p>
                    <p className="className= text-xs text-neutral-500">
                      {year}
                    </p>
                  </div>
                </div>
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
    </div>
  );
}
