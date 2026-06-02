import * as React from "react";
import dashify from "dashify";
import type * as T from "./Input.types";
import { HelpText } from "../Common";
import { cx } from "../../utils";
import { inputStyles } from "./Input.styles";
import { InputWrapper } from "../Common/InputWrapper";

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
      <InputWrapper htmlId={htmlId} label={label}>
        <input {...props} id={htmlId} className={classes} ref={forwardedRef} />
        {helpText && <HelpText hasError={hasError}>{helpText}</HelpText>}
      </InputWrapper>
    );
  },
);

export { Input };
