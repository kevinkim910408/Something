import { missingClass } from "@/utils";
import clsx from "clsx";

type IconProps = JSX.IntrinsicElements["svg"] & {
  direction?: "up" | "right" | "down" | "left";
};

function Icon({
  children,
  className,
  fill = "currentColor",
  stroke,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
      fill={fill}
      stroke={stroke}
      className={clsx(
        missingClass(className, "w-") && "w-5",
        missingClass(className, "h-") && "h-5",
        className,
      )}
    >
      {children}
    </svg>
  );
}

export function IconCaret({
  direction = "down",
  stroke = "currentColor",
  ...props
}: IconProps) {
  let rotate;

  switch (direction) {
    case "down":
      rotate = "rotate-0";
      break;
    case "up":
      rotate = "rotate-180";
      break;
    case "left":
      rotate = "-rotate-90";
      break;
    case "right":
      rotate = "rotate-90";
      break;
    default:
      rotate = "rotate-0";
  }

  return (
    <Icon
      className={`w-5 h-5 transition ${rotate}`}
      fill="transparent"
      strokeWidth="1.25"
      {...props}
      stroke={stroke}
    >
      <title>Caret</title>
      <path d="M14 8L10 12L6 8" />
    </Icon>
  );
}

export function IconClose({ stroke, ...props }: IconProps) {
  return (
    <Icon {...props} stroke={stroke || "currentColor"}>
      <title>Close</title>
      <line
        x1="4.44194"
        y1="4.30806"
        x2="15.7556"
        y2="15.6218"
        strokeWidth="1.25"
      />
      <line
        y1="-0.625"
        x2="16"
        y2="-0.625"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
        strokeWidth="1.25"
      />
    </Icon>
  );
}
