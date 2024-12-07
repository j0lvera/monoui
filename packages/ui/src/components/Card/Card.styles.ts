import { cva } from "class-variance-authority";

const base = [
  "overflow-hidden",
  "rounded-lg",
  "bg-white",
  "divide-y",
  "divide-y-2",
  "text-mono-text",
];

const cardStyles = cva(base, {
  variants: {
    withPadding: {
      false: ["p-0"],
      true: ["px-4", "py-4", "sm:px-6", "divide-y-0"],
    },
    borderless: {
      true: ["border-0"],
      false: ["border-2", "border-mono-border"],
    },
  },
  defaultVariants: {
    withPadding: false,
    borderless: false,
  },
});

export { cardStyles };
