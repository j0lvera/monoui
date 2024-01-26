import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { IconType } from "react-icons";

type DropdownOption = {
  label: string;
  value: string;
  icon?: IconType;
  onSelect?: (value: string) => void;
};

type DropdownElement = React.ElementRef<typeof Primitive.div>;

type DropdownProps = React.ComponentPropsWithoutRef<typeof Primitive.div> & {
  options: DropdownOption[];
};

export type { DropdownElement, DropdownProps };
