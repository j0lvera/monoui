import React, { HTMLAttributes, PropsWithChildren } from "react";
import { Box } from "../../Box";
import { cx } from "../../../utils";
import { styles } from "./styles";

interface CardFooterProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

type CardFooterComponent = (
  props: CardFooterProps,
) => React.ReactElement | null;

const CardFooter: CardFooterComponent = ({ children, ...props }) => {
  const classes = cx(styles, props.className);
  return (
    <Box {...props} className={classes}>
      {children}
    </Box>
  );
};

export { CardFooter };
