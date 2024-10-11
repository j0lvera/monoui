import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";

import * as T from "./Card.types";
import { cardStyles } from "./Card.styles";
import { Header, Title, Description, Body, Footer } from "./components";
import { cx } from "../../utils";

const Card = React.forwardRef<T.CardElement, T.CardProps>(
  ({ children, paddless, borderless = false, ...props }, forwardedRef) => {
    const classes = cx(cardStyles({ paddless, borderless }), props.className);

    return (
      <Primitive.div {...props} className={classes} ref={forwardedRef}>
        {children}
      </Primitive.div>
    );
  }
);

// Root element
const $ = Card;

export { $, Card, Header, Title, Body, Description, Footer };
