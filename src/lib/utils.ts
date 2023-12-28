import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function host() {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.mateopresacastro.me";
}

export const cache = new Map<string, string>();
