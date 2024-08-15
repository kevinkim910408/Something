"use client";

import { Tab2D, Tab3D } from "./_components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("2d");
  return (
    <>
      <Tabs
        defaultValue="2d"
        className="flex flex-col items-center"
        onValueChange={(value) => setSelectedTab(value)}
      >
        <div className="hidden md:block">
          <TabsList className="flex justify-center">
            <TabsTrigger value="2d">2D</TabsTrigger>
            <TabsTrigger value="3d">3D</TabsTrigger>
          </TabsList>
        </div>
        {selectedTab === "2d" ? (
          <TabsContent value="2d">
            <Tab2D />
          </TabsContent>
        ) : (
          <TabsContent value="3d">
            <Tab3D />
          </TabsContent>
        )}
      </Tabs>
    </>
  );
}
