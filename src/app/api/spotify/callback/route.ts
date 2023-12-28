import { cache, host } from "@/lib/utils";
import { NextRequest } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return Response.json(
      { error: "No spotify client id or secret on .env" },
      { status: 500 },
    );
  }

  if (!code || !state) {
    return Response.json({ error: "Missing query params" }, { status: 400 });
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code,
      grant_type: "authorization_code",
      redirect_uri: `${host()}/api/spotify/callback`,
    }),
  });

  const { access_token } = await res.json();
  if (!access_token) {
    return Response.error();
  }

  cache.set(state, access_token);
  return Response.redirect(`${host()}/credits?state=${state}`);
}
