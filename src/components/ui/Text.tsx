import { missingClass, formatText } from "@/utils";
import clsx from "clsx";

export function Text({
  as: Component = "span",
  className,
  color = "default",
  format,
  size = "copy",
  width = "default",
  children,
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  color?: "default" | "primary" | "subtle" | "notice" | "contrast";
  format?: boolean;
  size?: "lead" | "copy" | "fine";
  width?: "default" | "narrow" | "wide" | "none";
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const colors: Record<string, string> = {
    default: "inherit",
    primary: "text-primary/90",
    subtle: "text-primary/50",
    notice: "text-notice",
    contrast: "text-contrast/90",
  };

  const sizes: Record<string, string> = {
    lead: "text-lead font-medium",
    copy: "text-copy",
    fine: "text-fine subpixel-antialiased",
  };

  const widths: Record<string, string> = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide",
    none: "",
  };

  const styles = clsx(
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "text-") && colors[color],
    sizes[size],
    className,
  );

  return (
    <Component {...props} className={styles}>
      {format ? formatText(children) : children}
    </Component>
  );
}

export function Heading({
  as: Component = "h2",
  children,
  className = "",
  format,
  size = "heading",
  width = "default",
  ...props
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  format?: boolean;
  size?: "display" | "heading" | "lead" | "copy";
  width?: "default" | "narrow" | "wide" | "full";
} & React.HTMLAttributes<HTMLHeadingElement>) {
  const sizes = {
    display: "font-bold text-display",
    heading: "font-bold text-heading",
    lead: "font-bold text-lead",
    copy: "font-medium text-copy",
  };

  const widths = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide",
    full: "max-w-full",
  };

  const styles = clsx(
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "font-") && sizes[size],
    className,
  );

  return (
    <Component {...props} className={styles}>
      {format ? formatText(children) : children}
    </Component>
  );
}

export function Section({
  as: Component = "section",
  children,
  className,
  divider = "none",
  display = "grid",
  heading,
  padding = "all",
  ...props
}: {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  divider?: "none" | "top" | "bottom" | "both";
  display?: "grid" | "flex";
  heading?: string;
  padding?: "x" | "y" | "all" | "none";
  [key: string]: unknown;
}) {
  const paddings = {
    x: "px-6 md:px-8 lg:px-12",
    y: "py-6 md:py-8 lg:py-12",
    all: "p-6 md:p-8 lg:p-12",
  };

  const dividers = {
    none: "border-none",
    top: "border-t border-primary/05",
    bottom: "border-b border-primary/05",
    both: "border-y border-primary/05",
  };

  const displays = {
    flex: "flex",
    grid: "grid",
  };

  const styles = clsx(
    "w-full gap-4 md:gap-8",
    displays[display],
    padding != "none" &&
      missingClass(className, "//[mp][xy]?-") &&
      paddings[padding],
    dividers[divider],
    className,
  );

  return (
    <Component {...props} className={styles}>
      {heading ? (
        <Heading size="lead" className={padding === "y" ? paddings["x"] : ""}>
          {heading}
        </Heading>
      ) : null}
      {children}
    </Component>
  );
}

export function PageHeader({
  children,
  className,
  heading,
  variant = "default",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  heading?: string;
  variant?: "default" | "start";
  [key: string]: unknown;
}) {
  const variants: Record<string, string> = {
    default: `grid text-center w-full gap-4 p-6 py-8 md:p-8 lg:p-12 justify-items-center`,
    start: `grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-items-start`,
  };

  const styles = clsx(variants[variant], className);

  return (
    <header {...props} className={styles}>
      {heading ? (
        <Heading as="h1" width="narrow" size="heading" className="inline-block">
          {heading}
        </Heading>
      ) : null}
      {children}
    </header>
  );
}
