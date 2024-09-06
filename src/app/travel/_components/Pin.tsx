import { cityCoordinates } from "@/const";
import { travelCityNameState, travelPolaroidState } from "@/recoils";
import { convertCoordinateToVector } from "@/utils";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  DoubleSide,
  Material,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const Pins = ({ radius }: { radius: number }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pin = useLoader(OBJLoader, "/assets/pin.obj");

  const setPolaroidOpen = useSetRecoilState(travelPolaroidState);
  const setCityName = useSetRecoilState(travelCityNameState);

  const handlePointerOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handlePointerOut = () => {
    setHoveredIndex(null);
  };

  const handlePointerClick = (cityName: string) => {
    setPolaroidOpen(true);
    setCityName(cityName);
  };

  const cloneMaterial = (material: Material | Material[]) => {
    if (Array.isArray(material)) {
      return material.map((mat) => mat.clone());
    } else {
      return material.clone();
    }
  };

  return (
    <group>
      {cityCoordinates.map((info, index) => {
        const position = convertCoordinateToVector(
          [info.long, info.lat],
          radius,
        );
        const isHovered = index === hoveredIndex;
        const color = isHovered ? 0xff00ff : 0xf9cb9c;
        const pinClone = pin.clone();

        pinClone.traverse((obj: any) => {
          if (obj.isMesh) {
            obj.material = cloneMaterial(obj.material);
            if (Array.isArray(obj.material)) {
              obj.material.forEach((mat: Material) => {
                if (isColorMaterial(mat)) {
                  mat.color.set(color);
                  mat.side = DoubleSide;
                }
              });
            } else {
              if (isColorMaterial(obj.material)) {
                obj.material.color.set(color);
                obj.material.side = DoubleSide;
              }
            }
          }
        });

        return (
          <primitive
            position={position}
            scale={0.1}
            object={pinClone}
            key={index}
            onPointerOver={() => handlePointerOver(index)}
            onPointerOut={handlePointerOut}
            onClick={() => handlePointerClick(info.cityName)}
          />
        );
      })}
    </group>
  );
};

function isColorMaterial(
  material: Material,
): material is MeshBasicMaterial | MeshStandardMaterial {
  return (material as MeshBasicMaterial).color !== undefined;
}
