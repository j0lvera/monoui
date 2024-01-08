import React, { forwardRef } from "react";
import { match, P } from "ts-pattern";
import { Primitive } from "@radix-ui/react-primitive";
import { CgSpinner } from "react-icons/cg";
import { buttonStyles } from "./Button.styles";
import type * as T from "./Button.types";
import { cx } from "../../utils";

const Button = forwardRef<T.ButtonElement, T.ButtonProps>(
  (
    { size, intent, primary, loading = false, children, ...props },
    forwardedRef
  ) => {
    const classes = cx(
      buttonStyles({ size, intent, primary }),
      props.className
    );

    return (
      <Primitive.button {...props} className={classes} ref={forwardedRef}>
        {match({ loading })
          .with({ loading: true }, () => (
            <>
              <span
                className={cx([
                  "absolute",
                  "top-[50%]",
                  "left-[50%]",
                  "-translate-x-2/4",
                  "-translate-y-2/4",
                ])}
              >
                <CgSpinner className={cx("motion-safe:animate-spin")} />
              </span>
              <span className={cx(["opacity-0"])}>{children}</span>
            </>
          ))
          .otherwise(() => children)}
      </Primitive.button>
    );
  }
);

export { Button };
