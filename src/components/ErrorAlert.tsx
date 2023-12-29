import { ErrorResponse } from "@/app/credits/page";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Alert className="max-w-sm" onClick={() => setError(null)}>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
}

function getMessage({ reason }: ErrorResponse) {
  if (reason === "NO_ACTIVE_DEVICE") {
    return "You have to play a song on your Spotify device in order to activate it.";
  }

  return "Something went wrong. Please try again.";
}
