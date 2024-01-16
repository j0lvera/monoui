import * as React from "react";
import { Input } from "../Input";
import { InputProps } from "../Common/Common.types";

type ComboboxOption = {
  label: string;
  value: string | ComboboxOption[];
};

type ComboboxElement = React.ElementRef<typeof Input>;

type ComboboxProps = React.ComponentPropsWithoutRef<typeof Input> &
  InputProps & {
    options: ComboboxOption[];
    fullWidth?: boolean;
    allowCreate?: boolean;
    onSelect?: (option: ComboboxOption) => void;
    onCreate?: (option: ComboboxOption) => void;
    // Updates the selected option when optimistic updates happen.
    onSync?: (option: ComboboxOption) => void;
  };

// type ComboboxItemElement = React.ElementRef<typeof ListBoxItem>;
//
// type ComboboxItemProps = React.ComponentPropsWithoutRef<typeof ListBoxItem>;

export {
  ComboboxElement,
  ComboboxProps,
  // ComboboxItemElement,
  // ComboboxItemProps,
};
