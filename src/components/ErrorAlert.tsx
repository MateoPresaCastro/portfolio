import { ErrorResponse } from "@/app/credits/page";
import { BiSolidMessageAltError } from "react-icons/bi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import type { Dispatch, SetStateAction } from "react";

export default function ErrorAlert({
  error,
  setError,
}: {
  error: ErrorResponse;
  setError: Dispatch<SetStateAction<ErrorResponse | null>>;
}) {
  const message = getMessage(error);
  return (
    <div className="cursor-pointe mt-10 h-11 w-11 text-3xl text-yellow-100 transition-colors duration-300 ease-in-out hover:text-yellow-400">
      <AlertDialog>
        <AlertDialogTrigger>
          <BiSolidMessageAltError />
        </AlertDialogTrigger>
        <AlertDialogContent className="border-none bg-neutral-900">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-base text-neutral-300">
              Something went wrong
            </AlertDialogTitle>
            <AlertDialogDescription className="text-neutral-400">
              <div>
                You need a<span className="font-bold"> premium account</span>,
                the Spotify app
                <span className="font-bold"> running</span> and
                <span className="font-bold"> play a song</span> on it to
                activate your device.
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="cursor-pointer underline decoration-neutral-600 decoration-1 underline-offset-[2.5px] shadow-none transition-all duration-300 hover:decoration-neutral-400"
              onClick={() => setTimeout(() => setError(null), 90)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function getMessage({ reason }: ErrorResponse) {
  if (reason === "NO_ACTIVE_DEVICE") {
    return "Please open Spotify on your device and try again.";
  }

  return "Please try again.";
}
