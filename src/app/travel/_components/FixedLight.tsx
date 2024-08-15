import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLight } from "three";
import * as THREE from "three";

export const FixedLight = () => {
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
};
