import * as React from "react";
import dashify from "dashify";
import type * as T from "./Input.types";
import { Box } from "../Box";
import { Label, HelpText } from "../Common";
import { cx } from "../../utils";
import { inputStyles } from "./Input.styles";

const Input = React.forwardRef<T.InputComponent, T.InputProps>(
  (
    {
      label,
      helpText,
      hideLabel = false,
      hasError = false,
      fullWidth = false,
      ...props
    },
    forwardedRef,
  ) => {
    const htmlId = dashify(label);
    const classes = cx(inputStyles({ hasError, fullWidth }), props.className);

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
          <input
            {...props}
            id={htmlId}
            className={classes}
            ref={forwardedRef}
          />
        </Box>
        {helpText && <HelpText hasError={hasError}>{helpText}</HelpText>}
      </Box>
    );
  },
);

export { Input };
