import { cva } from "class-variance-authority";

const base = [
  // Base
  "relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border-2 text-base/6 font-semibold",

  // Focus
  // "focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500",
  "focus:outline-none",
  "data-[focus]:outline",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-mono-primary",

  // Icon
  // "[&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText]",
];

const size = {
  sm: ["py-0.5", "px-1.5", "text-sm"],
  md: ["py-1", "px-2"],
  lg: ["py-1.5", "px-3.5", "text-base"],
};

const DEFAULT = [
  "bg-white",
  "hover:bg-gray-100",
  "text-mono-primary",
  "border-mono-border",
];

const primary = [
  "bg-mono-primary",
  "hover:bg-mono-primary-hover",
  "border-mono-primary",
  "text-white",
];

const buttonStyles = cva(base, {
  variants: {
    primary: {
      true: primary,
    },
    intent: {
      primary,
      DEFAULT,
    },
    size,
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: ["data-[disabled]:opacity-50"],
    },
  },
  defaultVariants: {
    size: "md",
    primary: false,
    intent: "DEFAULT",
  },
});

export { buttonStyles };
