import React from "react";
import * as $ from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";
import * as styles from "./Flyout.styles";

type FlyoutElement = React.ElementRef<typeof $.Content>;

type FlyoutProps = React.ComponentProps<typeof $.Content> &
  VariantProps<typeof styles.flyoutStyles> & {
    trigger?: React.ReactNode;
  };

export type { FlyoutElement, FlyoutProps };
