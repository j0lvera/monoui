import * as React from "react";
import { Box } from "../../Box";
import { cx } from "../../../utils";
import { styles } from "./styles";
import { HTMLAttributes } from "react";

type BodyProps = HTMLAttributes<HTMLDivElement> & React.PropsWithChildren<{}>;

type Body = (props: BodyProps) => React.ReactElement | null;

const Body: Body = ({ children, ...props }) => {
  const classes = cx(styles, props.className);
  return (
    <Box {...props} className={classes}>
      {children}
    </Box>
  );
};

export { Body };
