import { ComponentPropsWithoutRef, ElementRef } from "react";
import { VariantProps } from "class-variance-authority";
import * as Common from "../Common";
import { inputStyles } from "./Input.styles";

type InputComponent = ElementRef<"input">;

interface InputProps
  extends ComponentPropsWithoutRef<"input">,
    VariantProps<typeof inputStyles>,
    Common.T.InputProps {
  fullWidth?: boolean;
}

export type { InputComponent, InputProps };
