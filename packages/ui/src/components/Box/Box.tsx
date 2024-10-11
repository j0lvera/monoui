import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { boxStyles } from "./Box.styles";
import { cx } from "../../utils";

const Box = forwardRef<
  ElementRef<typeof Primitive.div>, // renderer function
  ComponentPropsWithoutRef<typeof Primitive.div> // exotic component (not fn components just objects) ref: https://stackoverflow.com/a/64239113
>(({ children, ...props }, forwardedRef) => {
  const styles = cx(boxStyles, props.className);
  return (
    <Primitive.div {...props} className={styles} ref={forwardedRef}>
      {children}
    </Primitive.div>
  );
});

export { Box };
