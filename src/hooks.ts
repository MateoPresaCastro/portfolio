import { useState, useEffect } from "react";
import { host } from "./lib/utils";

export function useSpotifyToken(state: string | null) {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const item = localStorage.getItem("spotify_token");
        if (item) {
          setToken(item);
          setLoading(false);
          return;
        }

        if (!state) {
          setLoading(false);
          return;
        }

        const res = await fetch(`${host()}/api/spotify/token?state=${state}`);
        const { access_token } = await res.json();
        if (!access_token || typeof access_token !== "string") {
          throw new Error("No access token");
        }

        localStorage.setItem("spotify_token", access_token);
        setToken(access_token);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [state]);

  return { token, isLoading };
}

export default useSpotifyToken;
