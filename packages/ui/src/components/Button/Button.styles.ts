import { cva } from "class-variance-authority";

/**
 * Variants: Primary | Secondary
 * Sizes: Small | Medium | Large
 * States: Disabled | FullWidth
 */

const base = [
  // Base
  "relative",
  "isolate",
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-x-2",
  "rounded-lg",
  "border-2",
  "text-base/6",
  "font-semibold",

  // Active
  "active:ring-0",

  // Focus
  "focus:outline-none",
  "focus:ring-0",
  "data-[focus]:outline",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-mono-primary",
];

const size = {
  sm: ["py-0.5", "px-1.5", "text-sm"],
  md: ["py-1", "px-2"],
  lg: ["py-1.5", "px-3.5", "text-base"],
};

const primary = [
  "bg-gray-900",
  "text-white",
  "border-gray-900",
  "hover:bg-white",
  "hover:text-black",
  "dark:bg-white",
  "dark:text-black",
  "dark:border-black",
  "dark:hover:bg-black",
  "dark:hover:text-white",
  "dark:border-white",
];

const secondary = [
  "bg-white",
  "text-black",
  "border-gray-900",
  "hover:bg-gray-900",
  "hover:text-white",
  "dark:bg-black",
  "dark:text-white",
  "dark:border-white",
  "dark:hover:bg-white",
  "dark:hover:text-black",
  "dark:border-white",
];

const buttonStyles = cva(base, {
  variants: {
    primary: {
      true: primary,
    },

    intent: {
      primary,
      secondary,
    },

    size,
    fullWidth: {
      true: "w-full",
    },
    // TODO
    // disabled: {
    //   true: ["line-through", "opacity-50"],
    // },
  },
  defaultVariants: {
    size: "md",
    primary: false,
    intent: "secondary",
  },
});

export { buttonStyles };
