import { cva } from "class-variance-authority";

const base = [
  "inline-flex",
  "items-center",
  "justify-between",
  "border-2",
  "border-mono-border",
  "py-1.5",
  "px-2",
  "rounded-lg",
  "focus:outline-none",
  "focus:border-mono-primary",
];

const viewport = ["p-1"];

const content = [
  "relative",
  "max-h-96",
  "min-w-[8rem]",
  "py-1.5",
  "px-2",
  "border-2",
  "border-mono-border",
  "overflow-hidden",
  "rounded-lg",
  "bg-white",

  // Animation
  "data-[state=open]:animate-in",
  "data-[state=closed]:animate-out",
  "data-[state=closed]:fade-out-0",
  "data-[state=open]:fade-in-0",
  "data-[state=closed]:zoom-out-95",
  "data-[state=open]:zoom-in-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
  "data-[side=top]:slide-in-from-bottom-2",
];

const scroll = [
  "flex",
  "cursor-default",
  "items-center",
  "justify-center",
  "py-1",
];

const indicator = [
  "absolute",
  "left-0",
  "inline-flex",
  "items-center",
  "justify-center",
];

const selectStyles = cva(base);

const item = [
  "relative",
  "flex",
  "w-full",
  "cursor-default",
  "select-none",
  "items-center",
  "py-1.5",
  "pr-2",
  "pl-8",
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:text-mono-text/50",
  "focus:outline-none",
  "focus:border-mono-primary",
];

const itemStyles = cva(item);

export { selectStyles, itemStyles, viewport, content, indicator, scroll };
