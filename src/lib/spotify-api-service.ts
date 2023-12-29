import { ErrorResponse } from "@/app/credits/page";
import { remove, retrieve, store } from "./storage";

const SPOTIFY_PLAYER_URL = "https://api.spotify.com/v1/me/player";
const SPOTIFY_ACCOUNT_URL = "https://accounts.spotify.com/api/token";

export const play = spotify("play");
export const pause = spotify("pause");

function spotify(method: "play" | "pause") {
  return async (token: string, trackId: string) => {
    const res = await fetch(`${SPOTIFY_PLAYER_URL}/${method}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        uris: [`spotify:track:${trackId}`],
      }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      await handleError(error);
      return error;
    }
  };
}

async function handleError({ message }: ErrorResponse) {
  if (message === "The access token expired") {
    return await refreshToken();
  }

  if (message === "Invalid access token") {
    return removeTokens();
  }
}

async function refreshToken() {
  const oldRefreshToken = retrieve("refreshToken");
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  if (!oldRefreshToken || !clientId) {
    console.error("Error with refresh token or client id", {
      oldRefreshToken,
      clientId,
    });
    return;
  }

  const res = await fetch(SPOTIFY_ACCOUNT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: oldRefreshToken,
      client_id: clientId,
    }),
  });

  if (!res.ok) {
    console.error("Error refreshing token");
    removeTokens();
    return;
  }

  const { refreshToken, accessToken } = await res.json();
  if (refreshToken && accessToken) {
    store("refreshToken", refreshToken);
    store("accessToken", accessToken);
  }
}

function removeTokens() {
  remove("refreshToken");
  remove("accessToken");
  removeQueryParameters();
}

function removeQueryParameters() {
  const url = window.location.href;
  const urlWithoutQueryParams = url.split("?")[0];
  window.history.pushState({}, "", urlWithoutQueryParams);
}
