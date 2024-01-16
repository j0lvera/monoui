import * as _ from "lodash-es";
import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "cmdk";
import * as T from "./Combobox.types";
import * as styles from "./Combobox.styles";
import { Divider } from "../Divider";
import { Label } from "../Common";
import { Button } from "../Button";
import { Box } from "../Box";
import { Input } from "../Input";
import { cx } from "../../utils";
import { FaCheck, FaChevronDown, FaSistrix } from "react-icons/fa";

const Combobox = React.forwardRef<T.ComboboxElement, T.ComboboxProps>(
  ({ label, hideLabel, options, onSelect, defaultValue }, forwardedRef) => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(defaultValue);

    const handleOnSelect = (selectedValue: string) => {
      console.log("selected value", selectedValue);

      const option = options.find((option) => option.value === selectedValue);
      console.log("selected option", option);

      if (!_.isNil(option)) {
        // If same option then unselect it.
        if (option?.label === selected) {
          // Unselect logic
        } else {
          // Select logic
        }
      }
    };

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Box>
          <Label className={cx([], { "sr-only": hideLabel })}>{label}</Label>
        </Box>
        <Popover.Trigger asChild>
          <Button role="combobox" className={cx([""], { "mt-2": !hideLabel })}>
            {label}
            <FaChevronDown />
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content sideOffset={4} align="start">
            <Command
              className={cx([
                "bg-white",
                "flex",
                "h-full",
                "w-full",
                "flex-col",
                "overflow-hidden",
                "rounded-lg",
                "border-2",
                "border-mono-border",
              ])}
            >
              <Box
                className={cx(["flex", "items-center", "px-2"])}
                cmdk-input-wrapper=""
              >
                <FaSistrix
                  className={cx([
                    "h-4",
                    "w-4",
                    "shrink-0",
                    "font-bold",
                    "text-lg",
                  ])}
                />
                <CommandInput
                  // className={cx([styles.comboboxStyles()])}
                  placeholder="Search Option..."
                  ref={forwardedRef}
                  className={cx([
                    "flex",
                    "w-full",
                    "rounded-md",
                    "bg-transparent",
                    "outline-none",
                    "border-0",
                    "placeholder:text-muted-foreground",
                    "focus:outline-none",
                    "focus:ring-0",
                    "disabled:cursor-not-allowed",
                    "disabled:opacity-50",
                  ])}
                />
              </Box>
              <Divider border size="sm" className={cx(["py-0"])} />
              <CommandList>
                <CommandEmpty>
                  <Box>Nothing here</Box>
                </CommandEmpty>
                {options.map((option, index) => {
                  // Handle sections
                  if (Array.isArray(option.value)) {
                    const nestedOptions = option.value;
                    const key = `${label}-${index}`;

                    return (
                      <CommandGroup key={key} heading={option.label}>
                        {nestedOptions.map((nestedOption, nestedIndex) => (
                          <CommandItem
                            key={String(nestedOption.value)}
                            onSelect={handleOnSelect}
                          >
                            {nestedOption.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    );
                  }
                  return (
                    <CommandGroup>
                      <CommandItem
                        className={cx([
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
                        ])}
                        key={option.value}
                        onSelect={handleOnSelect}
                      >
                        {option.label}
                      </CommandItem>
                    </CommandGroup>
                  );
                })}
              </CommandList>
            </Command>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);

export { Combobox };
