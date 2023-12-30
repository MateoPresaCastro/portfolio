"use client";
import Image from "next/image";
import SONG_DATA from "@/song-data";
import SongMetaData from "@/components/SongMetaData";
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
              priority={id === 1}
              className="ml-1.5"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAWlBMVEUPDAspGg88IhJgLxQXEA0iFg4yHhEUDgwbEw1ILBdwTC6QWi1aNx2PRxm2cjaWYTNSMBduNRWEUCmYVia8ZiU/JhSfaDklIB41LyxuOhh0RB6nXiiKXjgpIhQ02A65AAAAWklEQVQI1xXIRwKDMBAEsFl7Ky5UAyn/f2fCUUJMU9UIBjC27wODYZTznMP/idp73xdidrTj+JT3a80Ja2t7mbecFZSS1lAWRgxyJTEDYkniIswMInF2t+v+Ad17A7jiX4TKAAAAAElFTkSuQmCC"
            />
            <SongMetaData {...data} />
          </CarouselItem>
        ))}
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
