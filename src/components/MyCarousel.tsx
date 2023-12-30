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

export default function MyCarousel() {
  const opts = {
    align: "start",
    loop: true,
  };

  return (
    <Carousel opts={opts} className="w-72 max-w-sm md:w-full lg:md:w-full">
      <CarouselContent>
        {SONG_DATA.map(({ image, id, ...data }) => (
          <CarouselItem key={id} className="basis-72 md:basis-96">
            <Image
              src={image}
              width={550}
              height={550}
              alt="Song cover art"
              priority
              className="ml-1.5"
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
