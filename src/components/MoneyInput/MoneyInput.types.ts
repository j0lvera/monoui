import { ComponentPropsWithoutRef, ElementRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import * as Common from "../Common";
import { VariantProps } from "class-variance-authority";
import { inputStyles } from "../Input";

type InputComponent = ElementRef<typeof NumericFormat>;

type NumericFormatPropsKeys = keyof NumericFormatProps;

interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, NumericFormatPropsKeys>,
    NumericFormatProps,
    VariantProps<typeof inputStyles>,
    Common.T.InputProps {
  currency?: string;
  symbol?: string;
}

export type { InputProps, InputComponent };
