import { cva } from "class-variance-authority";

const base = [""];

const command = [
  "bg-white",
  "flex",
  "h-full",
  "w-full",
  "flex-col",
  "overflow-hidden",
  "rounded-lg",
  "border-2",
  "border-mono-border",
];

const input = [
  "flex",
  "w-full",
  "rounded-md",
  "bg-transparent",
  "outline-none",
  "border-0",
  "placeholder:text-muted-foreground",
  "focus:outline-none",
  "focus:ring-0",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
];

const item = [
  "relative",
  "flex",
  "cursor-default",
  "select-none",
  "items-center",
  "px-2",
  "py-1",
  "outline-none",
  "rounded-sm",
  "aria-selected:bg-mono-primary",
  "aria-selected:text-white",
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:opacity-50",
];

const checkedIcon = ["opacity-0", "absolute", "right-2"];
const comboboxStyles = cva(base, {
  variants: {
    hasError: {
      true: ["border-mono-error"],
    },
  },
  defaultVariants: {
    hasError: false,
  },
});

export { comboboxStyles, command, input, item, checkedIcon };
