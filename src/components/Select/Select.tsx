import * as React from "react";
import * as $ from "@radix-ui/react-select";
import { match, P } from "ts-pattern";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as T from "./Select.types";
import * as styles from "./Select.styles";
import { cx } from "../../utils";
import { Box } from "../Box";
import { Label } from "../Label";
import { HelpText } from "../HelpText";

const Select = React.forwardRef<T.SelectElement, T.SelectProps>(
  (
    {
      label,
      hideLabel = false,
      helpText,
      fullWidth,
      hasError,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cx(
      [styles.selectStyles({ fullWidth, hasError })],
      className
    );
    return (
      <Box className={cx(["relative"])}>
        <Label
          htmlFor={"select"}
          className={cx([""], {
            "sr-only": hideLabel,
          })}
        >
          {label}
        </Label>
        <Box className={cx(["mt-1"])}>
          <$.Root>
            <$.Trigger id="select" {...props} className={classes} ref={ref}>
              <$.Value placeholder={props.placeholder} />
              <$.Icon className={cx(["ml-2"])} asChild>
                <FaChevronDown />
              </$.Icon>
            </$.Trigger>
            <$.Portal>
              <$.Content className={cx([styles.content])} position="popper">
                <$.ScrollUpButton className={cx([styles.scroll])}>
                  <FaChevronUp />
                </$.ScrollUpButton>

                <$.Viewport className={cx([styles.viewport])}>
                  {children}
                </$.Viewport>

                <$.ScrollDownButton className={cx([styles.scroll])}>
                  <FaChevronDown />
                </$.ScrollDownButton>
                <$.Arrow />
              </$.Content>
            </$.Portal>
          </$.Root>
        </Box>
        {match(helpText)
          .with(P.not(P.nullish), (helpText) => (
            <HelpText hasError={hasError}>{helpText}</HelpText>
          ))
          .otherwise(() => null)}
      </Box>
    );
  }
);

const SelectItem = React.forwardRef<T.SelectItemElement, T.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const classes = cx([styles.itemStyles()], className);
    return (
      <$.Item {...props} className={classes} ref={forwardedRef}>
        <$.ItemText>{children}</$.ItemText>
        <$.ItemIndicator className={cx([styles.indicator])}>
          <FaCheck />
        </$.ItemIndicator>{" "}
      </$.Item>
    );
  }
);

export { Select, SelectItem };
