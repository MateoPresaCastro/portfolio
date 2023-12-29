"use client";
import Link from "next/link";
import SONG_DATA from "./song-data";
import SpotifyWebPlayer from "@/components/SpotifyWebPlayer";
import LoginButton from "@/components/LoginButton";
import { useSearchParams } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import MyCarousel from "@/components/MyCarousel";
import {
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import BackButton from "@/components/BackButton";

export default function Credits() {
  const [currentTrackId, setCurrentTrackId] = useState<string>(
    SONG_DATA.at(0)!.id!,
  );
  const [error, setError] = useState<string | null>(null);
  const token = useSearchParams().get("accessToken");
  const refreshToken = useSearchParams().get("refreshToken");
  if (token) {
    localStorage.setItem("accessToken", token);
  }

  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }

  const storedToken = localStorage.getItem("accessToken");

  return (
    <div className="flex flex-grow items-center justify-center bg-neutral-900">
      <div className="m-10">
        <div className="ml-2 max-w-2xl text-neutral-300">
          <BackButton />
          <div className="relative flex items-center justify-center">
            <MyCarousel setCurrentTrackId={setCurrentTrackId} />
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
              {!storedToken ? (
                <LoginButton />
              ) : (
                <SpotifyWebPlayer
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
