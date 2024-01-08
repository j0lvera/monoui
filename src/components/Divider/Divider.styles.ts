import { cva } from "class-variance-authority";

const base = [""];

const horizontal = ["px-0", "w-full"];
const vertical = ["py-0", "h-full"];

const dividerStyles = cva(base, {
  variants: {
    size: {
      sm: ["p-1"],
      md: ["p-2"],
      lg: ["p-4"],
      xl: ["p-6"],
    },
    border: {
      true: [],
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

export { dividerStyles };
