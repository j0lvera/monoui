import * as _ from "lodash-es";
import * as React from "react";
import { cx } from "../../utils";
import AsyncCreatableSelect from "react-select/async-creatable";
import CreatableSelect from "react-select/creatable";
import * as Input from "../Input";

interface ComboboxOption {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => {
  return {
    label,
    value: label.toLowerCase().replace(/\W/g, "-"),
  };
};

const defaultOptions = [
  { label: "Cat", value: "cat" },
  { label: "Dog", value: "dog" },
  { label: "Bird", value: "bird" },
  { label: "Elephant", value: "elephant" },
  { label: "Mouse", value: "mouse" },
  { label: "Rabbit", value: "rabbit" },
  { label: "Tiger", value: "tiger" },
  { label: "Lion", value: "lion" },
  { label: "Monkey", value: "monkey" },
  { label: "Panda", value: "panda" },
  { label: "Car", value: "car" },
  { label: "Car Payment", value: "car_payment" },
];

const loadOptions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultOptions);
    }, 1000);
  });
};

type ComboboxComp = {
  onCreate: (inputValue: string) => void;
  defaultOptions: ComboboxOption[];
};

const Combobox = () => {
  let [isLoading, setIsLoading] = React.useState(false);
  let [options, setOptions] = React.useState<ComboboxOption[]>(defaultOptions);
  let [value, setValue] = React.useState<ComboboxOption | null>(null);
  let handleCreate = (inputValue: string) => {
    console.log("Creating new option:", inputValue);
    setIsLoading(true);
    const newOpt = createOption(inputValue);
    setTimeout(() => {});
    setOptions((prev) => [...prev, newOpt]);
    setValue(newOpt);
    setIsLoading(false);
  };

  return (
    <CreatableSelect
      unstyled
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          minHeight: "auto",
        }),
      }}
      classNames={{
        container: (state) =>
          state.isFocused
            ? cx([Input.styles.base, "ring-0", "border-mono-primary"])
            : cx([Input.styles.base]),
        control: (state) => {
          return cx(["py-0"]);
        },
        menu: (state) =>
          cx([
            "top-0",
            "left-0",
            "mt-1",
            "border-2",
            "border-mono-primary",
            "rounded-md",
            "shadow-lg",
            "bg-white",
          ]),

        option: (state) => {
          const base = cx([
            "relative",
            "flex",
            "cursor-default",
            "select-none",
            "items-center",
            "px-2",
            "py-1",
            "outline-none",
            "rounded-sm",
            "aria-selected:bg-mono-primary",
            "aria-selected:text-white",
            "data-[disabled]:pointer-events-none",
            "data-[disabled]:opacity-50",
          ]);

          if (state.isFocused) {
            return cx([base, "bg-mono-primary", "text-white"]);
          }

          return base;
        },
      }}
      value={value}
      options={options}
      isLoading={isLoading}
      onCreateOption={handleCreate}
    />
  );
};

export { Combobox };
