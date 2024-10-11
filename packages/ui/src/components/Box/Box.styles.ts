import { cva } from "class-variance-authority";

const base = ["box-border", "m-0", "min-w-0", "w-full"];

const boxStyles = cva(base);

export { boxStyles };
