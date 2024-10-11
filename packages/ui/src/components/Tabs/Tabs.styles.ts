import { cva } from "class-variance-authority";

const rootBase = ["inline-flex", "flex-col"];

const rootStyles = cva(rootBase, {
  variants: {
    fullWidth: {
      true: ["w-full"],
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const listBase = ["flex", "flex-row", "space-x-1"];

const listStyles = cva(listBase, {
  variants: {
    fullWidth: {
      true: ["w-full"],
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const contentBase = [""];

const contentStyles = cva(contentBase, {
  variants: {
    fullWidth: {
      true: ["w-full"],
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export { rootStyles, listStyles, contentStyles };
