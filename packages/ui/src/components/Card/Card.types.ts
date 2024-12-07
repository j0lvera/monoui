import { ComponentPropsWithRef, ElementRef } from "react";
import { VariantProps } from "class-variance-authority";
import { cardStyles } from "./Card.styles";

type CardElement = ElementRef<"div">;

type CardProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof cardStyles> & {
    withPadding?: boolean;
    withBorder?: boolean;
  };

export type { CardElement, CardProps };
