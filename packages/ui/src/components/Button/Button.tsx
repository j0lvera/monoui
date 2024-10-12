import React, { forwardRef } from "react";
import { Button as RAButton } from "react-aria-components";
import * as styles from "./Button.styles";
import type * as T from "./Button.types";
import { cx } from "../../utils";

const Button = forwardRef<T.ButtonElement, T.ButtonProps>(
  ({ size, fullWidth, intent, primary, children, ...props }, forwardedRef) => {
    const classes = cx(
      styles.buttonStyles({ size, intent, primary, fullWidth }),
      props.className,
    );

    return (
      <RAButton {...props} className={classes} ref={forwardedRef}>
        {children}
      </RAButton>
    );
  },
);

export { Button };
