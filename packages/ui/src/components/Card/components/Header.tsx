import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { styles } from "./styles";
import { cx } from "../../../utils";

type HTMLTableHeader = React.ElementRef<typeof Primitive.div>;

type HeaderProps = React.ComponentPropsWithoutRef<typeof Primitive.div> & {};

const Header = React.forwardRef<HTMLTableHeader, HeaderProps>(
  ({ children, ...props }, forwardRef) => {
    const classes = cx(styles, props.className);
    return (
      <Primitive.div {...props} className={classes} ref={forwardRef}>
        {children}
      </Primitive.div>
    );
  }
);

export { Header };
