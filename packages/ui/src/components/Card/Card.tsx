import * as React from "react";
import * as T from "./Card.types";
import { cardStyles } from "./Card.styles";
import { cx } from "../../utils";

const Card = React.forwardRef<T.CardElement, T.CardProps>(
  ({ children, withPadding, borderless = false, ...props }, forwardedRef) => {
    const classes = cx(
      cardStyles({ withPadding, borderless }),
      props.className,
    );

    return (
      <div {...props} className={classes} ref={forwardedRef}>
        {children}
      </div>
    );
  },
);

export { Card };
