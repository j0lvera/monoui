import React, { HTMLAttributes, PropsWithChildren } from "react";
import { styles } from "./styles";
import { cx } from "../../../utils";
import { Box } from "../../Box";

interface CardHeaderProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

type CardHeaderComponent = (
  props: CardHeaderComponent,
) => React.ReactElement | null;

const CardHeader = React.forwardRef<CardHeaderComponent, CardHeaderProps>(
  ({ children, ...props }, forwardRef) => {
    const classes = cx(styles, props.className);
    return (
      <Box {...props} className={classes}>
        {children}
      </Box>
    );
  },
);

export { CardHeader };
