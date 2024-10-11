import * as React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { match, P } from "ts-pattern";
import * as $ from "@radix-ui/react-dialog";
import * as T from "./Flyout.types";
import * as styles from "./Flyout.styles";
import { Button } from "../Button";
import { cx } from "../../utils";
import { Box } from "../Box";
import { FaTimes } from "react-icons/fa";

const Flyout = React.forwardRef<T.FlyoutElement, T.FlyoutProps>(
  ({ trigger, side, children, ...props }, forwardedRef) => {
    const [open, setOpen] = React.useState(false);
    const classes = cx(styles.flyoutStyles({ side }), props.className);
    return (
      <$.Root open={open} onOpenChange={setOpen}>
        <$.Trigger asChild>
          {match(trigger)
            .with(P.not(P.nullish), (t) => t)
            .otherwise(() => (
              <Button>Open</Button>
            ))}
        </$.Trigger>
        <$.Portal>
          <$.Overlay className={cx([styles.overlay])} />
          <$.Content {...props} className={classes}>
            <Box>{children}</Box>
            <$.Close asChild>
              <Button
                aria-label="Close"
                className={cx([
                  styles.close,
                  "border-0",
                  "p-0",
                  "animate",
                  {
                    "animate-in fade-in duration-300": open,
                    "animate-out fade-out duration-300": !open,
                  },
                ])}
              >
                <FaTimes />
              </Button>
            </$.Close>
          </$.Content>
        </$.Portal>
      </$.Root>
    );
  }
);

export { Flyout };
