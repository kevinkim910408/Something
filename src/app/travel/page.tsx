"use client";

import { EarthCanvas } from "./_components/EarthCanvas";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
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
  return (
    <>
      <div className="w-screen h-screen">
        <Canvas camera={{ fov: 25, near: 0.1, far: 1000, position: [1, 4, 4] }}>
          <FixedLight />
          <EarthCanvas />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </>
  );
}
