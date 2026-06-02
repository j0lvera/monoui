import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
} from "react";

type InputProps = {
  label: string;
  hideLabel?: boolean;
  helpText?: string;
};

type CommonProps = {
  fullWidth?: boolean;
};

// InputWrapper
interface InputWrapperProps
  extends ComponentPropsWithoutRef<"div">,
    InputProps {
  htmlId: string;
}

type InputWrapperComponent = (props: InputWrapperProps) => ReactElement | null;

export type { InputProps, CommonProps, InputWrapperComponent };
