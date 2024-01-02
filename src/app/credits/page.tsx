import MyCarousel from "@/components/MyCarousel";
import BackButton from "@/components/BackButton";

export default function Credits() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="m-10 ml-12 max-w-2xl">
        <BackButton />
        <MyCarousel />
      </div>
    </div>
  );
}
