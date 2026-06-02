import * as React from "react";
import { match, P } from "ts-pattern";
import * as T from "./Divider.types";
import { Box } from "../Box";
import { cx } from "../../utils";
import * as styles from "./Divider.styles";

const Divider = React.forwardRef<
  HTMLDivElement | HTMLHRElement,
  T.DividerProps
>(
  (
    { children, border = false, orientation = "horizontal", size, ...props },
    forwardedRef
  ) => {
    const classes = cx(
      styles.dividerStyles({ orientation, size, border }),
      props.className
    );
    return match({ border })
      .with({ border: true }, () => (
        <Box
          {...props}
          className={cx([classes], {
            "py-0": orientation === "vertical",
            "px-0": orientation === "horizontal",
          })}
        >
          <Box
            className={cx(["border", "border-mono-border"], {
              "w-full h-px": orientation === "horizontal",
              "h-full w-px": orientation === "vertical",
            })}
          />
        </Box>
      ))
      .otherwise(() => (
        <div {...props} className={classes} ref={forwardedRef} />
      ));
  }
);
// const horizontal = ["w-6", "h-px"];
// const vertical = ["h-6", "w-px"];

export { Divider };
