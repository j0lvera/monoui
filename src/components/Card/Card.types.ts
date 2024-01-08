import { ComponentPropsWithRef, ElementRef } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { VariantProps } from "class-variance-authority";
import { cardStyles } from "./Card.styles";

type CardElement = ElementRef<typeof Primitive.div>;

type CardProps = Omit<ComponentPropsWithRef<typeof Primitive.div>, "asChild"> &
  VariantProps<typeof cardStyles> & {
    paddless?: boolean;
  };

export type { CardElement, CardProps };
