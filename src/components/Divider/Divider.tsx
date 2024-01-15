import * as React from "react";
import { match, P } from "ts-pattern";
import * as T from "./Divider.types";
import { Box } from "../Box";
import { cx } from "../../utils";
import { dividerStyles } from "./Divider.styles";

const Divider = React.forwardRef<
  HTMLDivElement | HTMLHRElement,
  T.DividerProps
>(({ children, border = false, orientation, size, ...props }, forwardedRef) => {
  const classes = cx(
    dividerStyles({ orientation, size, border }),
    props.className
  );
  return match({ border })
    .with({ border: true }, () => (
      <div {...props} className={classes}>
        <Box className={cx(["bg-mono-border", "h-[2px]"])} />
      </div>
    ))
    .otherwise(() => <div {...props} className={classes} ref={forwardedRef} />);
});

export { Divider };
