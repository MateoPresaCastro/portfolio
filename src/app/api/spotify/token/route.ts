import { cache } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const state = request.nextUrl.searchParams.get("state");
  if (!state) {
    console.log("No state");
    return Response.error();
  }

  const access_token = cache.get(state);
  if (!access_token) {
    return Response.error();
  }

  return Response.json({ access_token });
}
