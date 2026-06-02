import * as React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { match, P } from "ts-pattern";
import * as $ from "@radix-ui/react-dialog";
import * as T from "./Modal.types";
import * as styles from "./Modal.styles";
import { Button } from "../Button";
import { cx } from "../../utils";
import { Box } from "../Box";

const Modal = React.forwardRef<T.ModalElement, T.ModalProps>(
  ({ trigger, children, ...props }, forwardedRef) => {
    return (
      <$.Root>
        <$.Trigger asChild>
          {match(trigger)
            .with(P.not(P.nullish), (t) => <>{t}</>)
            .otherwise(() => (
              <Button>Open</Button>
            ))}
        </$.Trigger>
        <$.Portal>
          <$.Overlay className={cx([styles.overlay])} />
          <$.Content
            className={cx([styles.content, props.className])}
            {...props}
          >
            <Box>{children}</Box>
            <$.Close asChild>
              <Button
                aria-label="Close"
                onlyIcon
                className={cx([styles.close, "border-0", "p-0"])}
              >
                <FaCircleXmark />
              </Button>
            </$.Close>
          </$.Content>
        </$.Portal>
      </$.Root>
    );
  },
);

export { Modal };
