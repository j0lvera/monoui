import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { boxStyles } from "./Box.styles";
import { cx } from "../../utils";

const Box = forwardRef<
  ElementRef<"div">, // renderer function
  ComponentPropsWithoutRef<"div"> // exotic component (not fn components just objects) ref: https://stackoverflow.com/a/64239113
>(({ children, ...props }, forwardedRef) => {
  const styles = cx(boxStyles, props.className);
  return (
    <div {...props} className={styles} ref={forwardedRef}>
      {children}
    </div>
  );
});

export { Box };
