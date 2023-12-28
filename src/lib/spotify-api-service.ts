const spotifyApiPlayerUrl = "https://api.spotify.com/v1/me/player";

export async function playTrack(
  token: string,
  trackId: string,
  deviceId: string,
) {
  const res = await fetch(`${spotifyApiPlayerUrl}/play?device_id=${deviceId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      uris: [`spotify:track:${trackId}`],
    }),
  });

  return res;
}
