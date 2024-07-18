import { recoilConfigKeys } from "./recoilKey";
import { atom } from "recoil";

export const eventState = atom<[]>({
  key: recoilConfigKeys.event,
  default: [],
});
