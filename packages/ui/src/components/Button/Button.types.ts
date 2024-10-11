import { VariantProps } from "class-variance-authority";
import type { buttonStyles } from "./Button.styles";
import { ComponentPropsWithoutRef, ElementRef } from "react";
import { Primitive } from "@radix-ui/react-primitive";

type ButtonElement = ElementRef<typeof Primitive.button>;

type ButtonProps = ComponentPropsWithoutRef<typeof Primitive.button> &
  VariantProps<typeof buttonStyles> & {
    loading?: boolean;
    fullWidth?: boolean;
  };

export type { ButtonElement, ButtonProps };
