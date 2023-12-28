const spotifyApiPlayerUrl = "https://api.spotify.com/v1/me/player";

function spotify(method: "play" | "pause") {
  return async (token: string, trackId: string) => {
    await fetch(`${spotifyApiPlayerUrl}/${method}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        uris: [`spotify:track:${trackId}`],
      }),
    });
  };
}

export const play = spotify("play");
export const pause = spotify("pause");
