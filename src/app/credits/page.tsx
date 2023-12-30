"use client";
import MyCarousel from "@/components/MyCarousel";
import BackButton from "@/components/BackButton";

export default function Credits() {
  return (
    <div className="flex flex-grow items-center justify-center">
        <div className="ml-12 m-10 max-w-2xl">
          <BackButton />
          <MyCarousel />
        </div>
    </div>
  );
}
