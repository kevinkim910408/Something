"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Travel() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/travel/2d");
  }, []);

  return <div />;
}
