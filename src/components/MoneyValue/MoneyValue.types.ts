import { ComponentPropsWithoutRef, ElementRef } from "react";
import { CurrencyFormat, CurrencySettings } from "accounting";

interface MoneyValueProps
  extends ComponentPropsWithoutRef<"span">,
    CurrencySettings<CurrencyFormat> {
  value: string | number;
  withColor?: boolean;
  withSign?: boolean;
}

type MoneyValueComponent = ElementRef<"span">;

export { MoneyValueComponent, MoneyValueProps };
