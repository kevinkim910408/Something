"use client";

import { EarthCanvas } from "./_components/EarthCanvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { DirectionalLight } from "three";
import * as THREE from "three";

function FixedLight() {
  const lightRef = useRef<DirectionalLight>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.copy(camera.position);
      lightRef.current.position.add(
        camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(3),
      );
    }
  });

  return <directionalLight ref={lightRef} />;
}

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("2d");
  return (
    <>
      <Tabs
        defaultValue="2d"
        className="flex flex-col items-center"
        onValueChange={(value) => setSelectedTab(value)}
      >
        <TabsList className="grid max-w-[400px] w-11/12 grid-cols-2">
          <TabsTrigger value="2d">2D</TabsTrigger>
          <TabsTrigger value="3d">3D</TabsTrigger>
        </TabsList>
        <TabsContent value="2d"></TabsContent>
        {selectedTab === "3d" && (
          <TabsContent value="3d">
            <div className="h-screen w-screen">
              <Canvas
                camera={{ fov: 25, near: 0.1, far: 1000, position: [1, 4, 4] }}
              >
                <FixedLight />
                <EarthCanvas />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </>
  );
}
