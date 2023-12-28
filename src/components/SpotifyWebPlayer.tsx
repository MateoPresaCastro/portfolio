import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
  use,
} from "react";
import { Button } from "./ui/button";
import { playTrack } from "@/lib/spotify-api-service";
import Script from "next/script";

export default function SpotifyWebPlayer({ token }: { token: string }) {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playBackState, setPlayBackState] =
    useState<Spotify.PlaybackState | null>(null);

  useEffect(() => {
    console.log("USE EFFECT");
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

    await playTrack(
      token,
      "0ea9jt0vWPgR5Jm2P4q70z?si=dd558e48d57e4c8f",
      deviceId,
    );

    setIsPlaying(true);
  };

  const handlePause = async () => {
    if (!deviceId) {
      return;
    }
    await player?.pause();
    setIsPlaying(false);
  };

  const checkState = async () => {
    const playBackState = await player?.getCurrentState();
    if (playBackState) {
      setIsActive(true);
    }
  };

  return (
    <h1>
      {isActive ? (
        <Button
          className="bg-neutral-600 hover:bg-neutral-500"
          onClick={handlePlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>
      ) : (
        <Button
          className="bg-neutral-600 hover:bg-neutral-500"
          onClick={checkState}
        >
          Activate Player on Spotify
        </Button>
      )}
      <Script src="https://sdk.scdn.co/spotify-player.js" />
    </h1>
  );
}
