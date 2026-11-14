import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-mono-tech mb-2.5 text-xs font-semibold uppercase tracking-[0.16em]",
            isDark ? "text-[#D99A36]" : "text-[#31566D]"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={cn(
          "text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.125rem] lg:leading-[1.18]",
          isDark ? "text-white" : "text-[#142B3A]"
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-3.5 text-base leading-relaxed",
            isDark ? "text-[#C5D5E0]" : "text-[#546470]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
