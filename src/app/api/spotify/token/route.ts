import { cache } from "@/lib/utils";
import { NextRequest } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const state = request.nextUrl.searchParams.get("state");
  if (!state) {
    console.log("No state");
    return Response.json({ error: "No state" }, { status: 400 });
  }

  const access_token = cache.get(state);
  if (!access_token) {
    return Response.json({ error: "No access token" }, { status: 500 });
  }

  return Response.json({ access_token });
}