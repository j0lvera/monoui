import { cva } from "class-variance-authority";

const base = [
  "block",
  "w-full",
  "rounded-lg",
  "border-2",
  "border-mono-border",
  "py-1.5",
  "px-2",
  "text-left",
  "text-mono-text",
  "text-ellipsis",
  "placeholder:text-mono-border",
  "outline-none",
  "focus:ring-0",
  "focus:border-mono-primary",
];

const inputStyles = cva(base, {
  variants: {
    hasError: {
      true: "border-mono-error",
    },
  },
  defaultVariants: {},
});

export { inputStyles, base };
