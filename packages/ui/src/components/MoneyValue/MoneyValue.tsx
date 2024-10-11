import * as React from "react";
import accounting from "accounting";
import { MoneyValueComponent, MoneyValueProps } from "./MoneyValue.types";
import { cx } from "../../utils";

const MoneyValue = React.forwardRef<MoneyValueComponent, MoneyValueProps>(
  (
    {
      value,
      symbol = "$",
      precision = 2,
      decimal = ".",
      thousand = ",",
      withSign,
      withColor,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = cx(
      {
        "text-green-700 font-semibold": withColor && Number(value) > 0,
      },
      rest.className,
    );

    const absValue = Math.abs(Number(value));

    return (
      <span className={classes} ref={forwardedRef}>
        {withSign && Number(value) < 0 ? "-" : ""}
        {accounting.formatMoney(absValue, symbol, precision, thousand, decimal)}
      </span>
    );
  },
);

export { MoneyValue };
