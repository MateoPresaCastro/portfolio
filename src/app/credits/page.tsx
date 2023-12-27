"use client";
import * as React from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import images from "./images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Discography() {
  return (
    <div className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="max-w-2xl text-neutral-300">
          <Link
            href="/"
            className="mb-2 flex w-auto cursor-pointer items-center underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] transition-all duration-300 hover:decoration-neutral-400"
          >
            <ArrowLeftIcon />
            <p className="ml-1">Back</p>
          </Link>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-72 max-w-sm md:w-full lg:md:w-full"
          >
            <CarouselContent>
              {images.map(({ image, album, artist, song, year }, index) => (
                <CarouselItem key={index} className="basis-72 md:basis-96">
                  <div>
                    <Image
                      src={image}
                      width={500}
                      height={500}
                      alt="testing"
                      unoptimized
                    />
                    <div className="flex justify-center">
                      <div className="mt-2">
                        <p className="text-neutral-300">{`${artist} - ${song}`}</p>
                        <p className="className= text-neutral-500">{album}</p>
                        <p className="className= text-xs text-neutral-500">
                          {year}
                        </p>
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
        </div>
      </div>
    </div>
  );
}
