import { host, generateRandomString } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  if (!client_id) {
    return Response.json(
      { error: "No spotify client id on .env" },
      { status: 500 },
    );
  }

  const scope =
    "streaming user-read-email user-read-private user-modify-playback-state user-read-playback-state";

  const state = generateRandomString(16);
  const authQueryParameters = new URLSearchParams({
    state,
    client_id,
    scope,
    response_type: "code",
    redirect_uri: `${host()}/api/spotify/callback`,
  });

  return Response.redirect(
    `https://accounts.spotify.com/authorize/?${authQueryParameters.toString()}`,
  );
}
