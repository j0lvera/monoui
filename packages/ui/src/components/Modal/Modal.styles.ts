import { cva } from "class-variance-authority";

const base = [""];

const title = ["text-lg", "font-semibold"];

const description = ["text-mono-text"];

const overlay = ["fixed", "inset-0", "bg-black", "bg-opacity-50"];

const content = [
  "fixed",
  "top-1/2",
  "left-1/2",
  "transform",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "bg-transparent",
  "w-96",
  "rounded-md",
];

const close = ["absolute", "top-3", "right-3", "text-xl"];

const modalStyles = cva(base);

export { modalStyles, title, description, overlay, content, close };
