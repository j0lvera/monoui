const content = [
  "relative",
  "max-h-96",
  "min-w-[8rem]",
  "p-1",
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
const item = [
  "relative",
  "flex",
  "w-full",
  "cursor-default",
  "select-none",
  "items-center",
  "py-0.5",
  "px-2",
  "rounded-sm",
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:text-mono-text/50",
  "outline-none",
  "focus:rounded-md",
  "focus:bg-mono-primary",
  "focus:text-white",
  "focus:border-mono-primary",
];

export { item, content };
