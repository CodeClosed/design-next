import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark-outline";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#D99A36] text-[#0E1F2B] font-semibold hover:bg-[#B87D1E] hover:text-white border border-transparent shadow-xs",
  secondary:
    "bg-[#142B3A] text-white font-semibold hover:bg-[#0E1F2B] border border-transparent shadow-xs",
  outline:
    "bg-white text-[#142B3A] font-semibold border border-[#31566D] hover:bg-[#142B3A] hover:text-white",
  "dark-outline":
    "bg-transparent text-white font-semibold border border-[#8FAAC0] hover:bg-white/10",
  ghost:
    "bg-transparent text-[#142B3A] font-semibold hover:bg-[#E7EDF1] border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 px-3.5 py-2 text-sm rounded",
  md: "min-h-11 px-5 py-2.5 text-sm rounded",
  lg: "min-h-12 px-6 py-3 text-base rounded",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClasses, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export interface LinkButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(baseClasses, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
    </Link>
  );
}
