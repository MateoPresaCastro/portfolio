import { useState, type Dispatch, type SetStateAction } from "react";
import { pause, play } from "@/lib/spotify-api-service";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import { ErrorResponse } from "@/app/credits/page";

export default function SpotifyWebPlayer({
  token,
  currentTrackId,
  setError,
}: {
  token: string;
  currentTrackId: string;
  setError: Dispatch<SetStateAction<ErrorResponse | null>>;
}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [trackPlayingId, setTrackPlayingId] = useState<string | null>(null);

  const handlePlay = async () => {
    const error = await play(token, currentTrackId);
    if (error) {
      setError(error);
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    setTrackPlayingId(currentTrackId);
  };

  const handlePause = async () => {
    const error = await pause(token, currentTrackId);
    if (error) {
      setError(error);
      setIsPlaying(false);
      return;
    }

    setIsPlaying(false);
  };

  if (isPlaying && currentTrackId !== trackPlayingId) {
    (async () => await handlePlay())();
  }

  return (
    <div
      className="mt-10 h-11 w-11 cursor-pointer text-3xl text-neutral-300 transition-colors duration-300 ease-in-out hover:text-neutral-500"
      onClick={isPlaying ? handlePause : handlePlay}
    >
      {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
    </div>
  );
}