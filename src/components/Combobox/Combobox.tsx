import * as _ from "lodash-es";
import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { match, P } from "ts-pattern";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "cmdk";
import type * as T from "./Combobox.types";
import * as styles from "./Combobox.styles";
import { Divider } from "../Divider";
import { HelpText, Label } from "../Common";
import { Button } from "../Button";
import { Box } from "../Box";
import { cx } from "../../utils";
import { FaCheck, FaChevronDown, FaSistrix } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

const Combobox = React.forwardRef<T.ComboboxElement, T.ComboboxProps>(
  (
    {
      isLoading = false,
      label,
      hideLabel,
      helpText,
      options,
      onSelect,
      onUnselect,
      hasError,
      defaultValue,
      ...props
    },
    forwardedRef
  ) => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(defaultValue);

    const classes = cx(styles.comboboxStyles({ hasError }), props.className);

    const handleOnSelect = (selectedValue: string) => {
      const option = options.find((option) => option.value === selectedValue);

      if (!_.isNil(option)) {
        // If same option then unselect it.
        if (option?.label === selected) {
          // Unselect logic
          setSelected(undefined);
          onUnselect?.(option);
        } else {
          // Select logic
          setSelected(option.label);
          onSelect?.(option);
        }
      }

      setOpen(false);
    };

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Box>
          <Label className={cx([], { "sr-only": hideLabel })}>{label}</Label>
        </Box>
        <Popover.Trigger asChild>
          <Button
            role="combobox"
            className={cx(classes, ["font-normal"], { "mt-2": !hideLabel })}
          >
            {match([selected, props.placeholder])
              // Use selected value if available
              .with([P.not(P.nullish), P._], () => <span>{selected}</span>)
              // Use placeholder if value is not available and placeholder is
              .with([P.nullish, P.not(P.nullish)], () => (
                <span>{props.placeholder}</span>
              ))
              // Use default placeholder if value and placeholder are not available
              .with(P.array(P.nullish), () => <span>Select option...</span>)
              .exhaustive()}
            {isLoading ? (
              <CgSpinner
                className={cx(["motion-safe:animate-spin", "ml-auto"])}
              />
            ) : (
              <FaChevronDown />
            )}
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            sideOffset={4}
            align="start"
            {...props}
            ref={forwardedRef}
          >
            <Command className={cx([styles.command])}>
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
                  placeholder="Search Option..."
                  className={cx([styles.input])}
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
                            className={cx([styles.item])}
                            onSelect={handleOnSelect}
                          >
                            {nestedOption.label}
                            <FaCheck
                              className={cx([styles.checkedIcon], {
                                "opacity-100": selected === option.label,
                              })}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    );
                  }
                  return (
                    <CommandGroup>
                      <CommandItem
                        key={option.value}
                        className={cx([styles.item])}
                        onSelect={handleOnSelect}
                      >
                        {option.label}
                        <FaCheck
                          className={cx([styles.checkedIcon], {
                            "opacity-100": selected === option.label,
                          })}
                        />
                      </CommandItem>
                    </CommandGroup>
                  );
                })}
              </CommandList>
            </Command>
          </Popover.Content>
        </Popover.Portal>
        {match(helpText)
          .with(P.not(P.nullish), (helpText) => (
            <HelpText hasError={hasError}>{helpText}</HelpText>
          ))
          .otherwise(() => null)}
      </Popover.Root>
    );
  }
);

export { Combobox };
