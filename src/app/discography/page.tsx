"use client";
import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import Autoplay from 'embla-carousel-autoplay'
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

const images: StaticImageData[] = [reezy, el1, el2];
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
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-96">
                  <Image src={image} alt="testing" unoptimized />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={"ghost"}/>
            <CarouselNext variant={"ghost"}/>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
