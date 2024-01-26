const base = [
  "flex",
  "grow",
  "flex-col",
  "gap-y-5",
  "overflow-y-auto",
  "border-r-2",
  "border-mono-border",
  "px-6",
  "pb-4",
];

const logoContainer = ["flex", "h-16", "shrink-0", "items-center"];

const logo = ["h-8", "w-auto"];

const navItem = [
  "text-mono-primary",
  "hover:bg-mono-hover",
  "group",
  "flex",
  "gap-x-3",
  "rounded-md",
  "p-2",
  "leading-6",
  "font-semibold",
  "flex",
  "items-center",
];

const listContainer = ["flex", "flex-1", "flex-col"];

const list = ["flex", "flex-col", "flex-1", "gap-y-1"];

const subList = ["-mx-2", "space-y-1"];

const icon = ["w-5", "h-5"];

export {
  base,
  logoContainer,
  logo,
  listContainer,
  list,
  subList,
  navItem,
  icon,
};
