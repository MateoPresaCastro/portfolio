"use client";
import Image from "next/image";
import Link from "next/link";
import songData from "./song-data";
import SpotifyWebPlayer from "@/components/SpotifyWebPlayer";
import LoginButton from "@/components/LoginButton";
import { useSpotifyToken } from "@/hooks";
import { useSearchParams } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Credits() {
  const state = useSearchParams().get("state");
  const { token } = useSpotifyToken(state);
  const [currentTrackId, setCurrentTrackId] = useState<string>(
    songData[0].id ?? "",
  );

  return (
    <div className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="max-w-2xl text-neutral-300">
          <Link href="/" className="mb-2 flex w-16 items-center">
            <ArrowLeftIcon />
            <p className="ml-1 w-auto cursor-pointer underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-400">
              Back
            </p>
          </Link>
          <MyCarousel setCurrentTrackId={setCurrentTrackId} />
          <div className="flex h-32 items-center justify-center">
            {!token ? (
              <LoginButton />
            ) : (
              <SpotifyWebPlayer token={token} currentTrackId={currentTrackId} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MyCarousel({
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
      console.log("selected", api.selectedScrollSnap());
      setCurrentTrackId(songData[api.selectedScrollSnap()].id ?? "");
    });
  }, [api, setCurrentTrackId]);

  const imagePriority = (index: number) => {
    return index === songData.length - 1 || index === 0 || index === 1
      ? true
      : false;
  };

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
        {songData.map(({ image, album, artist, song, year }, index) => (
          <CarouselItem key={index} className="basis-72 md:basis-96">
            <div>
              <Image
                src={image}
                width={500}
                height={500}
                alt="Song cover art"
                priority={imagePriority(index)}
                unoptimized
              />
              <div className="flex justify-start">
                <div className="mt-2">
                  <p className="text-neutral-300">{`${artist} - ${song}`}</p>
                  <p className="className= text-neutral-500">{album}</p>
                  <p className="className= text-xs text-neutral-500">{year}</p>
                </div>
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
