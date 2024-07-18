import { type Vector, type VectorXYZ } from "@/types";

/**
 *
 * @param vector [x, y, z]
 * @returns vector { x: x cord, y: y cord, z: z cord}
 */
export const convertVectorToVectorXYZ = (vector: Vector): VectorXYZ => {
  const [x, y, z] = vector;

  return {
    x,
    y,
    z,
  };
};
