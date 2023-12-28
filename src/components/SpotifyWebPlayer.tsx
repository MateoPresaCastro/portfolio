import Script from "next/script";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { playTrack } from "@/lib/spotify-api-service";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";

export default function SpotifyWebPlayer({
  token,
  currentTrackId,
}: {
  token: string;
  currentTrackId: string;
}) {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [trackPlayingId, setTrackPlayingId] = useState<string | null>(null);

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = async () => {
      const player = new window.Spotify.Player({
        name: "Mateo Credits Player",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.7,
      });

      setPlayer(player);
      player.addListener("ready", ({ device_id }) => {
        setDeviceId(device_id);
      });

      await player.connect();
      console.log("Spotify Web Player Connected");
      setIsActive(true);
    };
  }, [token]);

  const handlePlay = async () => {
    if (!deviceId) {
      return;
    }

    await playTrack(token, currentTrackId, deviceId);
    setIsPlaying(true);
    setTrackPlayingId(currentTrackId);
  };

  const handlePause = async () => {
    if (!deviceId) {
      return;
    }
    await player?.pause();
    setIsPlaying(false);
  };

  if (isPlaying && (currentTrackId !== trackPlayingId)) {
    (async () => await handlePlay())();
  }

  return (
    <h1>
      {(isActive && (
        <Button
          className="bg-neutral-700 transition-all duration-300 hover:bg-neutral-500 hover:text-neutral-800"
          onClick={isPlaying ? handlePause : handlePlay}
        >
          {isPlaying ? (
            <PauseIcon className="text-5xl" />
          ) : (
            <PlayIcon className="text-5xl" />
          )}
        </Button>
      )) || <Button disabled>Connecting...</Button>}
      <Script src="https://sdk.scdn.co/spotify-player.js" />
    </h1>
  );
}
