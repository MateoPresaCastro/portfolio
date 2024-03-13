"use client";
import Image from "next/image";
import SONG_DATA from "@/song-data";
import MetaData from "@/components/MetaData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OPTS = {
  align: "start",
  loop: true,
};

export default function MyCarousel() {
  const priority = (id: number) => {
    return id === 1 || id === 2 || id === SONG_DATA.length;
  };

  return (
    <Carousel opts={OPTS} className="w-72 max-w-sm md:w-full lg:md:w-full">
      <CarouselContent>
        {SONG_DATA.map(({ image, id, ...data }) => (
          <CarouselItem key={id} className="basis-72 md:basis-96">
            <Image
              src={image}
              width={550}
              height={550}
              alt="Song cover art"
              priority={priority(id)}
              className="ml-1.5"
            />
            <MetaData {...data} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"ghost"}
        className="text-neutral-600 transition-all duration-300 dark:text-neutral-500 dark:hover:text-neutral-300"
      />
      <CarouselNext
        variant={"ghost"}
        className="text-neutral-600 transition-all duration-300 dark:text-neutral-500 dark:hover:text-neutral-300"
      />
    </Carousel>
  );
}
