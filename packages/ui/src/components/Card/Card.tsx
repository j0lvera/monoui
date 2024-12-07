import * as React from "react";
import * as T from "./Card.types";
import { cardStyles } from "./Card.styles";
import { Header, Title, Description, Body, Footer } from "./components";
import { cx } from "../../utils";

const Card = React.forwardRef<T.CardElement, T.CardProps>(
  ({ children, paddless, borderless = false, ...props }, forwardedRef) => {
    const classes = cx(cardStyles({ paddless, borderless }), props.className);

    return (
      <div {...props} className={classes} ref={forwardedRef}>
        {children}
      </div>
    );
  },
);

export { Card };
