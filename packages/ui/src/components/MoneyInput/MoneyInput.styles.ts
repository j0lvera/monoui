import { cva } from "class-variance-authority";

const decorationBase = [
  "pointer-events-none",
  "absolute",
  "inset-y-0",
  "flex",
  "items-center",
];

const decorationStyles = cva(decorationBase, {
  variants: {
    hasError: {
      true: ["text-red-500"],
    },
  },
  defaultVariants: {
    hasError: false,
  },
});

export { decorationStyles };
