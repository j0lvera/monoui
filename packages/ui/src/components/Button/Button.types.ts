import { ComponentPropsWithoutRef, ElementRef } from "react";
import { VariantProps } from "class-variance-authority";
import { Button as RAButton } from "react-aria-components";
import type { buttonStyles } from "./Button.styles";

type ButtonElement = ElementRef<typeof RAButton>;

type ButtonProps = ComponentPropsWithoutRef<typeof RAButton> &
  VariantProps<typeof buttonStyles> & {
    loading?: boolean;
    fullWidth?: boolean;
  };

export type { ButtonElement, ButtonProps };
