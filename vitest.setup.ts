import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

// Mock next/image cleanly for unit tests
vi.mock("next/image", () => ({
  default: ({
    alt,
    src,
    width,
    height,
    className,
  }: {
    alt: string;
    src: string;
    width?: number;
    height?: number;
    className?: string;
  }) =>
    React.createElement("img", {
      src,
      alt,
      width,
      height,
      className,
    }),
}));
