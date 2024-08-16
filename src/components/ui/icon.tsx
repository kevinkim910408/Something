import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React from "react";

type IconType =
  | "ArrowLeftIcon"
  | "ArrowRightIcon"
  | "CheckIcon"
  | "CircleIcon"
  | "ChevronLeftIcon"
  | "ChevronRightIcon"
  | "HamburgerMenuIcon"
  | "MoonIcon"
  | "SunIcon"
  | "Cross1Icon";

export const Icon = ({
  name,
  className,
  onClick,
}: {
  name: IconType;
  className?: string;
  onClick?: () => void;
}) => {
  const { theme } = useTheme();
  const color = theme === "dark" ? "white" : "black";

  const renderIcon = () => {
    switch (name) {
      case "CheckIcon":
        return (
          <CheckIcon color={color} className={className} onClick={onClick} />
        );
      case "CircleIcon":
        return (
          <CircleIcon color={color} className={className} onClick={onClick} />
        );
      case "ChevronRightIcon":
        return (
          <ChevronRightIcon
            color={color}
            className={className}
            onClick={onClick}
          />
        );
      case "ArrowRightIcon":
        return (
          <ArrowRightIcon
            color={color}
            className={className}
            onClick={onClick}
          />
        );
      case "ArrowLeftIcon":
        return (
          <ArrowLeftIcon
            color={color}
            className={className}
            onClick={onClick}
          />
        );
      case "HamburgerMenuIcon":
        return (
          <HamburgerMenuIcon
            color={color}
            className={className}
            onClick={onClick}
          />
        );
      case "MoonIcon":
        return (
          <MoonIcon color={color} className={className} onClick={onClick} />
        );
      case "SunIcon":
        return (
          <SunIcon color={color} className={className} onClick={onClick} />
        );
      case "ChevronLeftIcon":
        return (
          <ChevronLeftIcon
            color={color}
            className={className}
            onClick={onClick}
          />
        );
      case "Cross1Icon":
        return (
          <Cross1Icon color={color} className={className} onClick={onClick} />
        );
      default:
        return <div>❓</div>;
    }
  };

  return <div>{renderIcon()}</div>;
};
