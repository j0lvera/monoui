import { ComponentPropsWithoutRef } from "react";
import { NumericFormatProps } from "react-number-format";
import { VariantProps } from "class-variance-authority";
import * as Common from "../Common";
import { inputStyles } from "./Input.styles";

type InputProps = ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof inputStyles> &
  Common.T.InputProps & {
    money?: boolean;
    onValueChange?: NumericFormatProps["onValueChange"];
    numericFormatOptions?: NumericFormatProps;
    symbol?: string;
    currency?: string;
    fullWidth?: boolean;
  };

export { InputProps };
