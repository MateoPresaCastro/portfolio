import { useState, useEffect } from "react";
import { host } from "./lib/utils";

export function useSpotifyToken(state: string | null) {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        if (!state) {
          setLoading(false);
          return;
        }

        if (localStorage.getItem("spotify_token")) {
          setToken(localStorage.getItem("spotify_token"));
          setLoading(false);
          return;
        }

        window.history.replaceState(null, "", "/credits");
        const res = await fetch(`${host()}/api/spotify/token?state=${state}`);
        const { access_token } = await res.json();
        localStorage.setItem("spotify_token", access_token);
        setToken(access_token);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [state]);

  return [token, isLoading];
}

export default useSpotifyToken;
