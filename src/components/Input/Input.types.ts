import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { VariantProps } from "class-variance-authority";
import { inputStyles } from "./Input.styles";
import { NumericFormatProps } from "react-number-format";
import { InputHTMLAttributes } from "react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputStyles> & {
    label: string;
    money?: boolean;
    hideLabel?: boolean;
    type?: NumericFormatProps["type"];
    value?: HTMLInputElement["value"] | NumericFormatProps["value"];
    defaultValue?:
      | HTMLInputElement["defaultValue"]
      | NumericFormatProps["defaultValue"];
    onValueChange?: NumericFormatProps["onValueChange"];
    numericFormatOptions?: NumericFormatProps;
    symbol?: string;
    currency?: string;
    helpText?: string;
  };

export { InputProps };
