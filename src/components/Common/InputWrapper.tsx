import * as React from "react";
import { Box } from "../Box";
import { Label } from "./Label";
import { InputWrapperComponent } from "./Common.types";
import { cx } from "../../utils";

const InputWrapper: InputWrapperComponent = ({
  label,
  htmlId,
  hideLabel,
  children,
}) => {
  return (
    <Box className={cx(["relative"])}>
      <Label
        className={cx({
          "sr-only": hideLabel,
        })}
        htmlFor={htmlId}
      >
        {label}
      </Label>
      <Box
        className={cx(["relative"], {
          "mt-1": !hideLabel,
        })}
      >
        {children}
      </Box>
    </Box>
  );
};

export { InputWrapper };
