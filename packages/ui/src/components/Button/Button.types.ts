import { ComponentPropsWithoutRef, ElementRef } from "react";
import { VariantProps } from "class-variance-authority";
import {
  Button as RAButton,
  ButtonProps as RAButtonProps,
} from "react-aria-components";
import type { buttonStyles } from "./Button.styles";

type ButtonElement = ElementRef<typeof RAButton>;

type ButtonProps = RAButtonProps &
  VariantProps<typeof buttonStyles> & {
    fullWidth?: boolean;
  };

export type { ButtonElement, ButtonProps };
