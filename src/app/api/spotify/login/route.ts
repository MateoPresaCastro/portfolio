import { host } from "@/lib/utils";
export const dynamic = "force-dynamic";

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  if (!client_id) {
    return Response.json(
      { error: "No spotify client id on .env" },
      { status: 500 },
    );
  }
  const scope = "streaming user-read-email user-read-private";
  const state = generateRandomString(16);
  const authQueryParameters = new URLSearchParams({
    state,
    client_id,
    scope,
    response_type: "code",
    redirect_uri: `${host()}/api/spotify/callback`,
  });

  return Response.redirect(
    "https://accounts.spotify.com/authorize/?" + authQueryParameters.toString(),
  );
}

function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length)),
  ).join("");
}
