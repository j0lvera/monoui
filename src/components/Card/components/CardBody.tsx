import React, { ReactElement, PropsWithChildren, HTMLAttributes } from "react";
import { Box } from "../../Box";
import { cx } from "../../../utils";
import { styles } from "./styles";

interface CardBodyProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

type CardBodyComponent = (props: CardBodyProps) => ReactElement | null;

const CardBody: CardBodyComponent = ({ children, ...props }) => {
  const classes = cx(styles, props.className);
  return (
    <Box {...props} className={classes}>
      {children}
    </Box>
  );
};

export { CardBody };
