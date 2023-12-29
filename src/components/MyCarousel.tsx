import Image from "next/image";
import SONG_DATA from "@/app/credits/song-data";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function MyCarousel({
  setCurrentTrackId,
}: {
  setCurrentTrackId: Dispatch<SetStateAction<string>>;
}) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentTrackId(SONG_DATA[api.selectedScrollSnap()].id ?? "");
    });
  }, [api, setCurrentTrackId]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-72 max-w-sm md:w-full lg:md:w-full"
      setApi={setApi}
    >
      <CarouselContent>
        {SONG_DATA.map(({ image, album, artist, song, year }, index) => (
          <CarouselItem key={index} className="basis-72 md:basis-96">
            <div className="relative">
              <Image
                src={image}
                width={550}
                height={550}
                alt="Song cover art"
                priority
                unoptimized
                className="ml-1.5"
              />
            </div>
            <div className="flex justify-start">
              <div className="ml-1.5 mt-2">
                <p className="text-neutral-300">{`${artist} - ${song}`}</p>
                <p className="className= text-neutral-500">{album}</p>
                <p className="className= text-xs text-neutral-500">{year}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"ghost"}
        className="text-neutral-300 transition-all duration-300 hover:bg-neutral-900 hover:text-neutral-500"
      />
      <CarouselNext
        variant={"ghost"}
        className="text-neutral-300 transition-all duration-300 hover:bg-neutral-900 hover:text-neutral-500"
      />
    </Carousel>
  );
}
