"use client";

import { Tab2D, Tab3D } from "../_components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { TRAVEL_CONST } from "@/const";
import { useRouter } from "next/navigation";

interface ParamsType {
  dimension: Dimension;
}

export type Dimension = "2d" | "3d";

export default function Travel({ params }: { params: ParamsType }) {
  const router = useRouter();

  return (
    <>
      <Tabs
        defaultValue={params.dimension}
        className="flex flex-col items-center"
        onValueChange={(value) => router.push(`${value}`)}
      >
        <div className="hidden md:block">
          <TabsList className="flex justify-center">
            <TabsTrigger value={TRAVEL_CONST["2D"]}>2D</TabsTrigger>
            <TabsTrigger value={TRAVEL_CONST["3D"]}>3D</TabsTrigger>
          </TabsList>
        </div>
        {params.dimension === TRAVEL_CONST["2D"] ? (
          <TabsContent value={TRAVEL_CONST["2D"]}>
            <Tab2D />
          </TabsContent>
        ) : (
          <TabsContent value={TRAVEL_CONST["3D"]}>
            <Tab3D />
          </TabsContent>
        )}
      </Tabs>
    </>
  );
}
