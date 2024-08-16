import { Card, CardContent } from "@/components/ui";
import React from "react";

interface PolaroidProps {
  imageUrl: string;
  caption: string;
}

export const Polaroid = ({ imageUrl, caption }: PolaroidProps) => {
  return (
    <Card className="flex flex-col items-center gap-4 m-4 p-4 bg-white shadow-lg">
      <img src={imageUrl} alt={caption} className="max-w-full h-auto" />
      <div className="text-lg text-black font-bold">{caption}</div>
    </Card>
  );
};
