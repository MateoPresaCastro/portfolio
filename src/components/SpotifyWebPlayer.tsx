import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
  use,
} from "react";
import { Button } from "./ui/button";
import { playTrack } from "@/lib/spotify-api-service";

export default function SpotifyWebPlayer({ token }: { token: string }) {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [playBackState, setPlayBackState] =
    useState<Spotify.PlaybackState | null>(null);

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
        console.debug("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }

        player.getCurrentState().then((state) => {
          if (!state) {
            setIsActive(false);
          } else {
            setIsActive(true);
          }
        });
      });

      await player.connect();
      console.log("Spotify Web Player Connected");
    };
  }, [token]);

  const handlePlay = async () => {
    if (!deviceId) {
      return;
    }

    await playTrack(token, "0ea9jt0vWPgR5Jm2P4q70z?si=dd558e48d57e4c8f", deviceId);
  };

  useEffect(() => {
    (async () => {
      const playBackState = await player?.getCurrentState();
      console.log({ playBackState });
      if (playBackState) {
        console.log({ playBackState });
        setPlayBackState(playBackState);
      }
    })();
  }, [player]);

  return (
    <h1>
      {isActive ? (
        <Button
          className="bg-neutral-600 hover:bg-neutral-500"
          onClick={handlePlay}
        >
          Play
        </Button>
      ) : (
        <Button
          className="bg-neutral-600 hover:bg-neutral-500"
          onClick={handlePlay}
        >
          Activate Player on Spotify
        </Button>
      )}
    </h1>
  );
}
