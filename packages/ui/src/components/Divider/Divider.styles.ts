import { cva } from "class-variance-authority";

const base = ["block"];

const horizontal = [""];
const vertical = [""];

const dividerStyles = cva(base, {
  variants: {
    size: {
      sm: ["p-1"],
      md: ["p-2"],
      lg: ["p-3"],
      xl: ["p-4"],
      "2xl": ["p-8"],
    },
    border: {
      true: [""],
    },
    orientation: {
      horizontal,
      vertical,
    },
  },
  defaultVariants: {
    size: "md",
    orientation: "horizontal",
  },
});

export { dividerStyles, horizontal, vertical };
