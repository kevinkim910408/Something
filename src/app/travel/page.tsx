"use client";

import { EarthCanvas } from "./_components/EarthCanvas";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen">
        <Canvas camera={{ fov: 30, near: 0.1, far: 1000, position: [0, 0, 4] }}>
          <pointLight position={[0, 0, 3]} />
          <EarthCanvas />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </>
  );
}
