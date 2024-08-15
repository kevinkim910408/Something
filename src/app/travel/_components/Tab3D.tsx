"use client";

import { EarthCanvas, FixedLight } from ".";
import { FadeInOut } from "@/components/animation";
import { travelCityNameState, travelPolaroidState } from "@/recoils";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRecoilState, useRecoilValue } from "recoil";

export const Tab3D = () => {
  const [polaroidOpen, setPolaroidOpen] = useRecoilState(travelPolaroidState);
  const cityName = useRecoilValue(travelCityNameState);

  return (
    <div className="h-screen w-screen">
      <FadeInOut isVisible={polaroidOpen}>
        <div
          className={`bg-red-300 ${polaroidOpen ? "h-96" : ""}`}
          onClick={() => setPolaroidOpen(false)}
        ></div>
      </FadeInOut>
      <Canvas camera={{ fov: 25, near: 0.1, far: 1000, position: [1, 4, 4] }}>
        <FixedLight />
        <EarthCanvas />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
