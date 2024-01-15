import * as React from "react";
import dashify from "dashify";
import { NumericFormat } from "react-number-format";
import type * as T from "./Input.types";
import { Box } from "../Box";
import { Label } from "../Label";
import { HelpText } from "../HelpText";
import { cx } from "../../utils";
import { inputStyles } from "./Input.styles";
import { match, P } from "ts-pattern";

const Input = React.forwardRef<HTMLInputElement, T.InputProps>(
  (
    {
      label,
      helpText,
      money,
      numericFormatOptions,
      hideLabel = false,
      symbol = "$",
      currency = "USD",
      hasError,
      ...props
    },
    forwardedRef
  ) => {
    const htmlId = dashify(label);
    const classes = cx(
      inputStyles({ hasError }),
      {
        "pr-12": currency,
        "text-right": money,
      },
      props.className
    );

    const moneyDecoratorsClasses = [
      "pointer-events-none",
      "absolute",
      "inset-y-0",
      "flex",
      "items-center",
    ];

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
          {match(money)
            .with(true, () => (
              <>
                <Box className={cx(["left-0", "pl-3"], moneyDecoratorsClasses)}>
                  <span className={cx(["text-mono-primary", "sm:text-sm"])}>
                    {symbol}
                  </span>
                </Box>
                <NumericFormat
                  id={htmlId}
                  className={classes}
                  valueIsNumericString
                  {...numericFormatOptions}
                  {...props}
                  // prefix={"$"}
                  getInputRef={forwardedRef}
                />
                <Box
                  className={cx(["right-0", "pr-3"], moneyDecoratorsClasses)}
                >
                  <span className={cx(["text-mono-primary", "sm:text-sm"])}>
                    {currency}
                  </span>
                </Box>
              </>
            ))
            .otherwise(() => (
              <input
                {...props}
                id={htmlId}
                className={classes}
                ref={forwardedRef}
              />
            ))}
        </Box>
        {match(helpText)
          .with(P.not(P.nullish), () => (
            <HelpText hasError={hasError}>{helpText}</HelpText>
          ))
          .otherwise(() => null)}
      </Box>
    );
  }
);

export { Input };
