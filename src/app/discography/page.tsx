"use client";
import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import reezy from "../../../public/reezy.jpg";
import el1 from "../../../public/eladio-hp.png";
import el2 from "../../../public/eladio beny redbull.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageData {
  image: StaticImageData;
  song: string;
  album?: string;
  artist: string;
}
const images: ImageData[] = [
  {
    image: reezy,
    album: "WEISSWEIN & HEARTBREAKS",
    artist: "Reezy",
    song: "FRAU VON WELT / NO CAP",
  },
  { image: el1, artist: "Eladio Carrion", song: "Red Bull" },
  {
    image: el2,
    album: "SEN2 KBRN, VOL. 2",
    artist: "Eladio Carrion",
    song: "HP Freestyle",
  },
];

export default function Discography() {
  return (
    <div className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="max-w-2xl text-neutral-300">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm"
            plugins={[Autoplay()]}
          >
            <CarouselContent>
              {images.map(({ image, album, artist, song }, index) => (
                <CarouselItem
                  key={index}
                  className="basis-56 md:basis-96 lg:basis-96"
                >
                  <div>
                    <Image src={image} alt="testing" unoptimized />
                    <div className="flex justify-center">
                      <div className="mt-2">
                        <p className=" font-semibold text-neutral-300">{`${artist} - ${song}`}</p>
                        <p className="className= text-neutral-500">{album}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={"ghost"} />
            <CarouselNext variant={"ghost"} />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
