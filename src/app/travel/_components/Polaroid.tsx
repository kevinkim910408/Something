import { Card } from "@/components/ui";
import Image from "next/image";
import React from "react";

interface PolaroidProps {
  imageUrl: string;
  caption: string;
}

export const Polaroid = ({ imageUrl, caption }: PolaroidProps) => {
  return (
    <Card className="flex flex-col items-center gap-4 shadow-lg">
      <Image src={imageUrl} alt={caption} width={400} height={300} />
      <div className="text-lg font-bold">{caption}</div>
    </Card>
  );
};
