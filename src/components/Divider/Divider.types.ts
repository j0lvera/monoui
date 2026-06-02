import { VariantProps } from "class-variance-authority";
import { dividerStyles } from "./Divider.styles";
import { HTMLAttributes } from "react";

type DividerProps = VariantProps<typeof dividerStyles> &
  HTMLAttributes<HTMLDivElement> & {
    border?: boolean;
  };

export { DividerProps };
