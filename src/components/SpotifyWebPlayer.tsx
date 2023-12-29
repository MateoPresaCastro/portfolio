import { useState, type Dispatch, type SetStateAction } from "react";
import { Button } from "./ui/button";
import { pause, play } from "@/lib/spotify-api-service";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
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
    <h1>
      <Button
        className="h-11 w-11 bg-transparent"
        onClick={isPlaying ? handlePause : handlePlay}
      >
        {isPlaying ? (
          <PauseIcon className="text-5xl" />
        ) : (
          <PlayIcon className="text-5xl" />
        )}
      </Button>
    </h1>
  );
}
