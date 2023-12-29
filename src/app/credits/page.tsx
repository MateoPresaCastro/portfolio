"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import SONG_DATA from "./song-data";
import PlayPauseButton from "@/components/PlayPauseButton";
import LoginButton from "@/components/LoginButton";
import MyCarousel from "@/components/MyCarousel";
import BackButton from "@/components/BackButton";
import ErrorAlert from "@/components/ErrorAlert";
import { retrieve, store } from "@/lib/storage";

export interface ErrorResponse {
  status: number;
  message: string;
  reason?: string;
}

export default function Credits() {
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [currentTrackId, setCurrentTrackId] = useState<string>(
    SONG_DATA.at(0)!.id!,
  );

  const token = useSearchParams().get("accessToken");
  const refreshToken = useSearchParams().get("refreshToken");
  if (token) {
    store("accessToken", token);
  }

  if (refreshToken) {
    store("refreshToken", refreshToken);
  }

  const storedToken = retrieve("accessToken");

  return (
    <div className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="ml-2 max-w-2xl text-neutral-300">
          <BackButton />
          <div className="relative flex flex-col items-center justify-center">
            <MyCarousel setCurrentTrackId={setCurrentTrackId} />
            <div className="flex h-10 w-72 items-center justify-center md:h-8 md:w-80">
              {error ? (
                <ErrorAlert error={error} setError={setError} />
              ) : !storedToken ? (
                <LoginButton />
              ) : (
                <PlayPauseButton
                  token={storedToken}
                  currentTrackId={currentTrackId}
                  setError={setError}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
