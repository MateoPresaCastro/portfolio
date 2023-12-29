const spotifyApiPlayerUrl = "https://api.spotify.com/v1/me/player";

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
      return error;
    }
  };
}

export const play = spotify("play");
export const pause = spotify("pause");
