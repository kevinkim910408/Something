import { type Coordinate, type Vector, type VectorXYZ } from "@/types";

/**
 * @param coordinate long lat
 * @param radius
 * @returns cords following radius [x, y, z]
 */

export const convertCoordinateToVector = (
  coordinate: Coordinate,
  radius: number,
): Vector => {
  const [longitude, latitude] = coordinate;

  const lambda = (longitude * Math.PI) / 180;
  const phi = (latitude * Math.PI) / 180;

  return [
    radius * Math.cos(phi) * Math.cos(lambda),
    radius * Math.sin(phi),
    -radius * Math.cos(phi) * Math.sin(lambda),
  ];
};

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

const isCoordinates = (element: any): element is [number, number] => {
  return (
    Array.isArray(element) &&
    element.length === 2 &&
    element.every((el) => typeof el === "number")
  );
};

export const normalizeCoordinates = (coordinates: Array<[number, number]>) => {
  const normalizedCoordinates: Array<[number, number]> = [];

  coordinates.forEach((coordinate) => {
    let isAllNumber = true;
    for (let i = 0; i < coordinate.length; i++) {
      const coord: [number, number] | number = coordinate[i];
      if (isCoordinates(coord)) {
        normalizedCoordinates.push(coord);
        isAllNumber = false;
      }
    }
    if (isAllNumber && isCoordinates(coordinate)) {
      normalizedCoordinates.push(coordinate);
    }
  });

  return normalizedCoordinates;
};
