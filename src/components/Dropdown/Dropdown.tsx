import * as React from "react";
import * as $ from "@radix-ui/react-dropdown-menu";
import * as T from "./Dropdown.types";
import * as styles from "./Dropdown.styles";
import { cx } from "../../utils";

const Dropdown = React.forwardRef<T.DropdownElement, T.DropdownProps>(
  ({ children, options, ...props }, forwardedRef) => {
    return (
      <$.Root>
        <$.Trigger asChild>{children}</$.Trigger>
        <$.Content
          sideOffset={4}
          {...props}
          className={cx([styles.content, props.className])}
          ref={forwardedRef}
        >
          {options?.map(({ label, value, icon: Icon, onSelect }) => (
            <$.Item
              className={cx([styles.item])}
              onSelect={() => onSelect?.(value)}
            >
              {Icon && <Icon className={cx(["mr-2"])} />}
              {label}
            </$.Item>
          ))}
        </$.Content>
      </$.Root>
    );
  }
);

export { Dropdown };
