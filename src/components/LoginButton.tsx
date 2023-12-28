import { host } from "@/lib/utils";
import { Button } from "./ui/button";
import { FaSpotify } from "react-icons/fa";
export default function LoginButton() {
  return (
    <div className="mt-10 flex justify-center">
      <Button
        className="bg-neutral-600 hover:bg-neutral-500"
        onClick={() => {
          window.location.href = `${host()}/api/spotify/login`;
        }}
      >
        Login to listen
        <FaSpotify className="ml-2 text-lg" />
      </Button>
    </div>
  );
}
