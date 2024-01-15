import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "../utils";
import * as Common from "./Common";

type HelpTextElement = React.ElementRef<typeof Primitive.p>;

type HelpTextProps = React.ComponentPropsWithoutRef<typeof Primitive.p> &
  VariantProps<typeof styles> &
  Pick<Common.T.InputProps, "hasError"> & {};

const styles = cva(["mt-2", "text-sm", "text-mono-text"], {
  variants: {
    hasError: {
      true: ["text-mono-error"],
    },
  },
  defaultVariants: {
    hasError: false,
  },
});

const HelpText = React.forwardRef<HelpTextElement, HelpTextProps>(
  ({ hasError, children, ...props }, forwardedRef) => {
    const classes = cx(styles({ hasError }));
    return (
      <p {...props} className={classes} ref={forwardedRef}>
        {children}
      </p>
    );
  }
);

export { HelpText };
