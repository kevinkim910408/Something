import MainCard from "./_components/MainCard";
import { MagicWandIcon, UploadIcon } from "@radix-ui/react-icons";
import React from "react";

export default function Setting() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full sm:grid-cols-3">
      <MainCard
        title="Upload"
        link="setting/upload"
        desc="Upload to firebase."
        icon={<UploadIcon width={40} height={40} />}
        className="h-40 bg-gradient-to-r from-orange-500 to-pink-500 col-span-2 sm:col-span-3"
      />
      <MainCard
        title="Permissions"
        link="setting/permissions"
        desc="Manage Permissions"
        icon={<MagicWandIcon width={40} height={40} />}
        className="h-40 bg-gradient-to-r from-pink-500 to-purple-500 col-span-2 "
      />
      <MainCard
        title="Modern Life"
        link="/modern-life"
        desc="117 Spots"
        icon={<></>}
        className="h-40 bg-gradient-to-r from-purple-500 to-indigo-500 col-span-2 sm:col-span-1"
      />
      <MainCard
        title="Popularity"
        link="/popularity"
        desc="102 Spots"
        icon={<></>}
        className="h-40 bg-gradient-to-r from-indigo-500 to-blue-500 col-span-2 sm:col-span-1"
      />
      <MainCard
        title="Sun & Sand"
        link="/sun-and-sand"
        desc="147 Spots"
        icon={<></>}
        className="h-40 bg-gradient-to-r from-blue-500 to-purple-500 col-span-2 "
      />
      <MainCard
        title="Popularity"
        link="/popularity"
        desc="102 Spots"
        icon={<></>}
        className="h-40 bg-gradient-to-r from-indigo-500 to-blue-500 col-span-2 sm:col-span-1"
      />
      <MainCard
        title="Popularity"
        link="/popularity"
        desc="102 Spots"
        icon={<></>}
        className="h-40 bg-gradient-to-r from-indigo-500 to-blue-500 col-span-2 sm:col-span-1"
      />
      <MainCard
        title="Popularity"
        link="/popularity"
        desc="102 Spots"
        icon={<></>}
        className="h-40 bg-gradient-to-r from-indigo-500 to-blue-500 col-span-2 sm:col-span-1"
      />
    </div>
  );
}
