"use client";
import MyCarousel from "@/components/MyCarousel";
import BackButton from "@/components/BackButton";

export default function Credits() {
  return (
    <div className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="ml-2 max-w-2xl">
          <BackButton />
          <MyCarousel />
        </div>
      </div>
    </div>
  );
}
