import { cva } from "class-variance-authority";

const base = [
  "overflow-hidden",
  "rounded-lg",
  "bg-white",
  "border-2",
  "divide-y",
  "divide-y-2",
  "text-mono-text",
];

const cardStyles = cva(base, {
  variants: {
    paddless: {
      true: ["p-0"],
      false: ["px-4", "py-4", "sm:px-6", "divide-y-0"],
    },
  },
  defaultVariants: {
    paddless: false,
  },
});

export { cardStyles };
