import { recoilConfigKeys } from "./recoilKey";
import { atom } from "recoil";

export const travelPolaroidState = atom<boolean>({
  key: recoilConfigKeys.TRAVEL_POLAROID,
  default: false,
});

export const travelCityNameState = atom<string>({
  key: recoilConfigKeys.TRAVEL_CITYNAME,
  default: "",
});
