import {
  KeyboardIcon,
  MagicWandIcon,
  ScissorsIcon,
  UploadIcon,
} from "@radix-ui/react-icons";

export const cards = [
  {
    title: "Upload Manager",
    link: "setting/upload",
    desc: "Upload Image and data to firebase storage/database.",
    icon: <UploadIcon width={40} height={40} />,
    className:
      "h-40 bg-gradient-to-r from-orange-500 to-pink-500 col-span-2 sm:col-span-3",
  },
  {
    title: "Photo Info Edit Manager",
    link: "setting/photoInfoEdit",
    desc: "Manage Photo Information.",
    icon: <MagicWandIcon width={40} height={40} />,
    className: "h-40 bg-gradient-to-r from-pink-500 to-purple-500 col-span-2",
  },
  {
    title: "Modern Life",
    link: "/modern-life",
    desc: "117 Spots",
    icon: <></>,
    className:
      "h-40 bg-gradient-to-r from-purple-500 to-indigo-500 col-span-2 sm:col-span-1",
  },
  {
    title: "Popularity",
    link: "/popularity",
    desc: "102 Spots",
    icon: <></>,
    className:
      "h-40 bg-gradient-to-r from-indigo-500 to-blue-500 col-span-2 sm:col-span-1",
  },
  {
    title: "Sun & Sand",
    link: "/sun-and-sand",
    desc: "147 Spots",
    icon: <></>,
    className: "h-40 bg-gradient-to-r from-blue-500 to-purple-500 col-span-2",
  },
  {
    title: "Folder Manager",
    link: "setting/folderManager",
    desc: "Manage folders.",
    icon: <KeyboardIcon width={40} height={40} />,
    className:
      "h-40 bg-gradient-to-r from-purple-500 to-indigo-500 col-span-2 sm:col-span-1",
  },
  {
    title: "Folder Manager - Edit",
    link: "setting/folderEdit",
    desc: "Manage editing folders.",
    icon: <ScissorsIcon width={40} height={40} />,
    className:
      "h-40 bg-gradient-to-r from-purple-500 to-indigo-500 col-span-2 sm:col-span-1",
  },
  {
    title: "Popularity",
    link: "/popularity",
    desc: "102 Spots",
    icon: <></>,
    className:
      "h-40 bg-gradient-to-r from-indigo-500 to-blue-500 col-span-2 sm:col-span-1",
  },
];
