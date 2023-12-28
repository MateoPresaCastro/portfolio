import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { pause, play } from "@/lib/spotify-api-service";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";

export default function SpotifyWebPlayer({
  token,
  currentTrackId,
}: {
  token: string;
  currentTrackId: string;
}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [trackPlayingId, setTrackPlayingId] = useState<string | null>(null);

  const handlePlay = async () => {
    await play(token, currentTrackId);
    setIsPlaying(true);
    setTrackPlayingId(currentTrackId);
  };

  const handlePause = async () => {
    await pause(token, currentTrackId);
    console.log("pause");
    setIsPlaying(false);
  };

  if (isPlaying && currentTrackId !== trackPlayingId) {
    (async () => await handlePlay())();
  }

  return (
    <h1>
      <Button
        className="bg-transparent h-11 w-11"
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
