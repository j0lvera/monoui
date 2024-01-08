import { Primitive } from "@radix-ui/react-primitive";
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "../../../utils";

const base = ["text-lg", "font-semibold", "leading-6", "text-mono-primary"];

const titleStyles = cva(base);

type TitleElement = React.ElementRef<typeof Primitive.h3>;

type TitleProps = React.ComponentPropsWithoutRef<typeof Primitive.h3> &
  VariantProps<typeof titleStyles> & {};

const Title = React.forwardRef<TitleElement, TitleProps>(
  ({ children, ...props }, forwardRef) => {
    const classes = cx(titleStyles(), props.className);
    return (
      <Primitive.h3 {...props} className={classes} ref={forwardRef}>
        {children}
      </Primitive.h3>
    );
  }
);

export { Title };
