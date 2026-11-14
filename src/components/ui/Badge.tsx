import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "navy" | "steel" | "amber" | "neutral" | "sample";

const badgeVariants: Record<BadgeVariant, string> = {
  navy: "bg-[#142B3A] text-white border border-[#142B3A]",
  steel: "bg-[#E8EFF4] text-[#142B3A] border border-[#C6D4DE]",
  amber: "bg-[#FDF3E3] text-[#7A4E0B] border border-[#EBC687]",
  neutral: "bg-[#F0F2F4] text-[#202A30] border border-[#DCE2E6]",
  sample: "bg-[#FFF8EB] text-[#7A4E0B] border border-dashed border-[#D99A36]",
};

export interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "steel", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-sm tracking-wide",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function SampleNoticeBanner({
  title,
  description,
  className,
}: {
  title?: string;
  description: string;
  className?: string;
}) {
  return (
    <aside
      aria-label="Template Content Notice"
      className={cn(
        "rounded-sm border border-dashed border-[#D99A36] bg-[#FFF9EE] px-4 py-3 text-sm text-[#5C3B07]",
        className
      )}
    >
      {title ? <strong className="font-semibold text-[#142B3A]">{title}: </strong> : null}
      <span>{description}</span>
    </aside>
  );
}
