import { SingleCoastLine } from ".";
import coastLineData from "@/assets/coastline_small.json";
import { normalizeCoordinates } from "@/utils";

export const CoastLine = ({ radius }: { radius: number }) => {
  const coordinatesList = coastLineData.features.map((data) =>
    normalizeCoordinates(data.geometry.coordinates as Array<[number, number]>),
  );

  return (
    <>
      {coordinatesList.map((coordinates, index) => {
        return (
          <SingleCoastLine
            coordinates={coordinates}
            material={{ color: "black" }}
            radius={radius}
            key={index}
          />
        );
      })}
    </>
  );
};
