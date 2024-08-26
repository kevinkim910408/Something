"use client";

import { Tab2D, Tab3D } from "./_components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { TRAVEL_CONST } from "@/const";
import { useState } from "react";

export default function Travel() {
  const [selectedTab, setSelectedTab] = useState(TRAVEL_CONST["2D"]);
  return (
    <>
      <Tabs
        defaultValue={TRAVEL_CONST["2D"]}
        className="flex flex-col items-center"
        onValueChange={(value) => setSelectedTab(value)}
      >
        <div className="hidden md:block">
          <TabsList className="flex justify-center">
            <TabsTrigger value={TRAVEL_CONST["2D"]}>2D</TabsTrigger>
            <TabsTrigger value={TRAVEL_CONST["3D"]}>3D</TabsTrigger>
          </TabsList>
        </div>
        {selectedTab === TRAVEL_CONST["2D"] ? (
          <TabsContent value={TRAVEL_CONST["2D"]}>
            <Tab2D />
          </TabsContent>
        ) : (
          <TabsContent value={TRAVEL_CONST["3D"]}>
            <Tab3D setSelectedTab={setSelectedTab} />
          </TabsContent>
        )}
      </Tabs>
    </>
  );
}
