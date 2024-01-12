import React from "react";
import * as $ from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";
import { modalStyles } from "./Modal.styles";

type ModalElement = React.ElementRef<typeof $.Content>;

type ModalProps = React.ComponentProps<typeof $.Content> &
  VariantProps<typeof modalStyles> & {
    trigger?: React.ReactNode;
  };

export type { ModalElement, ModalProps };
