const spotifyApiPlayerUrl = "https://api.spotify.com/v1/me/player";

export const play = spotify("play");
export const pause = spotify("pause");

function spotify(method: "play" | "pause") {
  return async (token: string, trackId: string) => {
    const res = await fetch(`${spotifyApiPlayerUrl}/${method}`, {
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
      if (error.message === "The access token expired") {
        await refreshToken();
      } else if (error.message === "Invalid access token") {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
      }
      return error;
    }
  };
}

async function refreshToken() {
  console.log("refreshing token");
  const oldRefreshToken = localStorage.getItem("refreshToken");
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  if (!oldRefreshToken || !clientId) {
    console.error("Error with refresh token or client id", {
      oldRefreshToken,
      clientId,
    });
    return;
  }

  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: oldRefreshToken,
      client_id: clientId,
    }),
  };

  const res = await fetch(url, payload);
  if (!res.ok) {
    console.error("Error refreshing token", res);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    return;
  }

  const { refreshToken, accessToken } = await res.json();
  if (refreshToken || accessToken) {
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("accessToken", accessToken);
  }
}
