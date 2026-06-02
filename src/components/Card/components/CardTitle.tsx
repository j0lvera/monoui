import React, { HTMLAttributes, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "../../../utils";

const base = ["text-lg", "font-semibold", "leading-6", "text-mono-primary"];

const titleStyles = cva(base);

interface CardTitleProps
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>,
    VariantProps<typeof titleStyles> {}

type CardTitleComponent = React.ElementRef<"h3">;

const CardTitle = React.forwardRef<CardTitleComponent, CardTitleProps>(
  ({ children, ...props }, forwardRef) => {
    const classes = cx(titleStyles(), props.className);
    return (
      <h3 {...props} className={classes} ref={forwardRef}>
        {children}
      </h3>
    );
  },
);

export { CardTitle };
