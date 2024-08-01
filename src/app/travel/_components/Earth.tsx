import CoastLine from "./Coastline";
import Pins from "./Pin";
import React from "react";

const EarthComponent = ({ radius }: { radius: number }) => {
  return (
    <>
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color="white"
          emissive="white"
          metalness={0.5}
          roughness={0.5}
        />
        <CoastLine radius={radius} />
        <Pins radius={radius} />
      </mesh>
    </>
  );
};

export const Earth = React.memo(EarthComponent, () => true);
