import { cva } from "class-variance-authority";

const description = ["text-mono-text"];

const overlay = [
  "fixed",
  "inset-0",
  "z-50",
  "bg-black/80",
  "data-[state=open]:animate-in",
  "data-[state=closed]:animate-out",
  "data-[state=closed]:fade-out-0",
  "data-[state=open]:fade-in-0",
];

const base = [
  "fixed",
  "z-50",
  "gap-4",
  "bg-white",
  "shadow-lg",
  "transition",
  "ease-in-out",
  "group",
  "data-[state=open]:animate-in",
  "data-[state=closed]:animate-out",
  "data-[state=closed]:duration-300",
  "data-[state=open]:duration-500",
];

const close = [
  "absolute",
  "top-3",
  "-right-10",
  "bg-transparent",
  "hover:bg-transparent",
  "text-xl",
  "text-gray-200",
];

const flyoutStyles = cva(base, {
  variants: {
    side: {
      left: [
        "inset-y-0",
        "left-0",
        "h-full",
        "w-3/4",
        "border-r",
        "data-[state=closed]:slide-out-to-left",
        "data-[state=open]:slide-in-from-left",
        "sm:max-w-sm",
      ],
      right: [
        "inset-y-0",
        "right-0",
        "h-full",
        "w-3/4",
        "border-l",
        "data-[state=closed]:slide-out-to-right",
        "data-[state=open]:slide-in-from-right",
        "sm:max-w-sm",
      ],
    },
  },
  defaultVariants: {
    side: "right",
  },
});

export { flyoutStyles, description, overlay, close };
