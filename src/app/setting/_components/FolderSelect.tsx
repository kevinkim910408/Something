import { mainFolders, subTravelFolders } from "../data/subfolders";
import { SelectContent, SelectGroup, SelectItem } from "@/components/ui";

export const MainfolderSelect = () => {
  return (
    <SelectContent>
      <SelectGroup>
        {mainFolders.map((mainFolder) => (
          <SelectItem value={mainFolder.toLocaleLowerCase()} key={mainFolder}>
            {mainFolder}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  );
};

export const SubTravelfolderSelect = () => {
  return (
    <SelectContent>
      <SelectGroup>
        {subTravelFolders.map((travel) => (
          <SelectItem value={travel.toLocaleLowerCase()} key={travel}>
            {travel}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  );
};
