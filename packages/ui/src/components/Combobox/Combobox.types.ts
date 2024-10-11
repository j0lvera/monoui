import * as React from "react";
import { InputProps } from "../Common/Common.types";

type ComboboxOption = {
  label: string;
  value: string | ComboboxOption[];
};

type ComboboxElement = React.ElementRef<"div">;

type ComboboxProps = React.ComponentPropsWithoutRef<"div"> &
  InputProps & {
    isLoading?: boolean;
    options: ComboboxOption[];
    allowCreate?: boolean;
    onSelect?: (option: ComboboxOption) => void;
    onUnselect?: (option: ComboboxOption) => void;
    onCreate?: (option: ComboboxOption) => void;
    // Updates the selected option when optimistic updates happen.
    onSync?: (option: ComboboxOption) => void;
  };

export type { ComboboxElement, ComboboxProps, ComboboxOption };
