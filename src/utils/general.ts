import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import typographicBase from "typographic-base/index";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function missingClass(string?: string, prefix?: string) {
  if (!string) {
    return true;
  }

  const regex = new RegExp(`(?:^|\\s|:)${prefix}`, "g");
  return string.match(regex) === null;
}

export function formatText(input?: string | React.ReactNode) {
  if (!input) {
    return;
  }

  if (typeof input !== "string") {
    return input;
  }

  return typographicBase(input, { locale: "en-us" }).replace(
    /\s([^\s<]+)\s*$/g,
    "\u00A0$1",
  );
}
