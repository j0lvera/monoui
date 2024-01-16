import { InputHTMLAttributes } from "react";
import { NumericFormatProps } from "react-number-format";
import { VariantProps } from "class-variance-authority";
import * as Common from "../Common";
import { inputStyles } from "./Input.styles";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputStyles> &
  Common.T.InputProps & {
    money?: boolean;
    type?: NumericFormatProps["type"];
    value?: HTMLInputElement["value"] | NumericFormatProps["value"];
    defaultValue?:
      | HTMLInputElement["defaultValue"]
      | NumericFormatProps["defaultValue"];
    onValueChange?: NumericFormatProps["onValueChange"];
    numericFormatOptions?: NumericFormatProps;
    symbol?: string;
    currency?: string;
  };

export { InputProps };
