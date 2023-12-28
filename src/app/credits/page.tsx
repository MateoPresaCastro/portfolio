"use client";
import Image from "next/image";
import Link from "next/link";
import songData from "./song-data";
import SpotifyWebPlayer from "@/components/SpotifyWebPlayer";
import LoginButton from "@/components/LoginButton";
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
  const token = useSearchParams().get("accessToken");
  if (token) {
    localStorage.setItem("accessToken", token);
  }

  const storedToken = localStorage.getItem("accessToken");
  const [currentTrackId, setCurrentTrackId] = useState<string>(
    songData[0].id ?? "",
  );

  return (
    <div className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="ml-1.5 max-w-2xl text-neutral-300">
          <Link href="/" className="mb-2 flex w-16 items-center">
            <ArrowLeftIcon />
            <p className="ml-1 w-auto cursor-pointer underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-400">
              Back
            </p>
          </Link>
          <div className="relative flex items-center justify-center">
            <MyCarousel setCurrentTrackId={setCurrentTrackId} />
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
              {!storedToken ? (
                <LoginButton />
              ) : (
                <SpotifyWebPlayer
                  token={storedToken}
                  currentTrackId={currentTrackId}
                />
              )}
            </div>
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
      setCurrentTrackId(songData[api.selectedScrollSnap()].id ?? "");
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
        {songData.map(({ image, album, artist, song, year }, index) => (
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
