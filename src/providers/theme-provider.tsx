"use client";

import { Theme } from "@radix-ui/themes";

export function ThemeRadixProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Theme appearance={"dark"}>{children}</Theme>;
}
