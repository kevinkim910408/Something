import { type Coordinate, type Vector } from "@/types";

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
