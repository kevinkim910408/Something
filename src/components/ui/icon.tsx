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
  const renderIcon = () => {
    switch (name) {
      case "CheckIcon":
        return <CheckIcon className={className} onClick={onClick} />;
      case "CircleIcon":
        return <CircleIcon className={className} onClick={onClick} />;
      case "ChevronRightIcon":
        return <ChevronRightIcon className={className} onClick={onClick} />;
      case "ArrowRightIcon":
        return <ArrowRightIcon className={className} onClick={onClick} />;
      case "ArrowLeftIcon":
        return <ArrowLeftIcon className={className} onClick={onClick} />;
      case "HamburgerMenuIcon":
        return <HamburgerMenuIcon className={className} onClick={onClick} />;
      case "MoonIcon":
        return <MoonIcon className={className} onClick={onClick} />;
      case "SunIcon":
        return <SunIcon className={className} onClick={onClick} />;
      case "ChevronLeftIcon":
        return <ChevronLeftIcon className={className} onClick={onClick} />;
      case "Cross1Icon":
        return <Cross1Icon className={className} onClick={onClick} />;
      default:
        return <div>❓</div>;
    }
  };

  return <div>{renderIcon()}</div>;
};
