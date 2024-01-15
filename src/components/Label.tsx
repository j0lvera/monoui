import * as React from "react";
import * as $ from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { cx } from "../utils";

type LabelElement = React.ElementRef<typeof $.Root>;

type LabelProps = React.ComponentPropsWithoutRef<typeof $.Root>;

const styles = cva([
  "text-sm",
  "font-semibold",
  "leading-6",
  "text-mono-primary",
]);

const Label = React.forwardRef<LabelElement, LabelProps>(
  ({ children, ...props }, forwardRef) => {
    const classes = cx(styles(), props.className);
    return (
      <$.Root {...props} className={classes} ref={forwardRef}>
        {children}
      </$.Root>
    );
  }
);

export { Label };
