import * as React from "react";
import dashify from "dashify";
import { forwardRef } from "react";
import { NumericFormat } from "react-number-format";
import * as Input from "../Input";
import { Box } from "../Box";
import { cx } from "../../utils";
import { InputComponent, InputProps } from "./MoneyInput.types";
import { decorationStyles } from "./MoneyInput.styles";
import { HelpText } from "../Common";
import { InputWrapper } from "../Common/InputWrapper";

const MoneyInput = forwardRef<InputComponent, InputProps>(
  ({ label, ...rest }, forwardedRef) => {
    const htmlId = dashify(label);
    const classes = cx(
      // inherit styles from the Input component
      Input.inputStyles(),
      ["text-right"],
      // let the user pass their own
      rest.className,
      // add proper spacing if we are using a currency
      {
        "pr-12": rest.currency,
      },
    );

    const decorationClasses = cx(decorationStyles());

    return (
      <InputWrapper htmlId={htmlId} label={label}>
        {rest.symbol && (
          <Box className={cx(["left-0", "pl-3", decorationClasses])}>
            {rest.symbol}
          </Box>
        )}
        <NumericFormat
          valueIsNumericString
          {...rest}
          id={htmlId}
          className={classes}
          getInputRef={forwardedRef}
        />
        {rest.currency && (
          <Box className={cx(["right-0", "pr-3", decorationClasses])}>
            {rest.currency}
          </Box>
        )}
        {rest.helpText && (
          <HelpText hasError={rest.hasError}>{rest.helpText}</HelpText>
        )}
      </InputWrapper>
    );
  },
);

export { MoneyInput };
