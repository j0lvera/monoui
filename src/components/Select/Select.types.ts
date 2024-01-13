import * as React from "react";
import * as $ from "@radix-ui/react-select";
import { VariantProps } from "class-variance-authority";
import { selectStyles } from "./Select.styles";

type SelectOption = {
  label: string;
  value: string;
};

type SelectSection = {
  label: string;
  value: SelectOption[];
};

type SelectElement = React.ElementRef<typeof $.Trigger>;

type SelectProps = React.ComponentPropsWithoutRef<typeof $.Trigger> &
  VariantProps<typeof selectStyles> & {};

type SelectItemElement = React.ElementRef<typeof $.Item>;

type SelectItemProps = React.ComponentPropsWithoutRef<typeof $.Item> & {};

export {
  SelectOption,
  SelectSection,
  SelectElement,
  SelectProps,
  SelectItemElement,
  SelectItemProps,
};
