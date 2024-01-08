import * as React from "react";
import dashify from "dashify";
import { Primitive } from "@radix-ui/react-primitive";
import { NumericFormat } from "react-number-format";
import type * as T from "./Input.types";
import { Box } from "../Box";
import { cx } from "../../utils";
import { inputStyles } from "./Input.styles";
import { match } from "ts-pattern";

const Input = React.forwardRef<HTMLInputElement, T.InputProps>(
  (
    {
      label,
      fullWidth,
      money,
      numericFormatOptions,
      hideLabel = false,
      symbol = "$",
      currency = "USD",
      ...props
    },
    forwardedRef
  ) => {
    const htmlId = dashify(label);
    const classes = cx(
      inputStyles({ fullWidth }),
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
      <Box
        className={cx(["relative"], {
          "w-full": fullWidth,
          "max-w-xs": !fullWidth,
        })}
      >
        <label
          className={cx(
            ["text-sm", "font-semibold", "leading-6", "text-mono-primary"],
            {
              "sr-only": hideLabel,
            }
          )}
          htmlFor={htmlId}
        >
          {label}
        </label>
        <Box
          className={cx(["relative"], {
            "mt-1": !hideLabel,
          })}
        >
          {match({ money })
            .with({ money: true }, () => (
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
      </Box>
    );
  }
);

export { Input };
