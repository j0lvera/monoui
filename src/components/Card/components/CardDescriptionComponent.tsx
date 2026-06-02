import * as React from "react";
import { Box } from "../../Box";
import { cx } from "../../../utils";

type CardDescriptionComponent = (
  props: React.PropsWithChildren<{}>,
) => React.ReactElement | null;

const CardDescription: CardDescriptionComponent = ({ children }) => {
  return <Box className={cx(["mt-1"])}>{children}</Box>;
};

export { CardDescription };
