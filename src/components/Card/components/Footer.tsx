import * as React from "react";
import { Box } from "../../Box";
import { cx } from "../../../utils";
import { styles } from "./styles";
import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

type FooterProps = HTMLAttributes<HTMLDivElement> & React.PropsWithChildren<{}>;

type Footer = (props: FooterProps) => React.ReactElement | null;

const Footer: Footer = ({ children, ...props }) => {
  const classes = cx(styles, props.className);
  return (
    <Box {...props} className={classes}>
      {children}
    </Box>
  );
};

export { Footer };
