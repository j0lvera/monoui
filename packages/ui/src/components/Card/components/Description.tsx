import * as React from "react";
import { Box } from "../../Box";
import { cx } from "../../../utils";

type Description = (
  props: React.PropsWithChildren<{}>
) => React.ReactElement | null;

const Description: Description = ({ children }) => {
  return <Box className={cx(["mt-1"])}>{children}</Box>;
};

export { Description };
