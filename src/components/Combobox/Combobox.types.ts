import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { InputProps } from "../Common/Common.types";
import { comboboxStyles } from "./Combobox.styles";

type ComboboxOption = {
  label: string;
  value: string | ComboboxOption[];
};

type ComboboxElement = React.ElementRef<"div">;

type ComboboxProps = React.ComponentPropsWithoutRef<"div"> &
  InputProps &
  VariantProps<typeof comboboxStyles> & {
    isLoading?: boolean;
    options: ComboboxOption[];
    allowCreate?: boolean;
    onSelect?: (option: ComboboxOption) => void;
    onUnselect?: (option: ComboboxOption) => void;
    onCreate?: (option: ComboboxOption) => void;
    // Updates the selected option when optimistic updates happen.
    onSync?: (option: ComboboxOption) => void;
    placeholder?: string;
  };

export type { ComboboxElement, ComboboxProps, ComboboxOption };
