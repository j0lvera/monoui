import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Combobox } from "./Combobox";
import { cx } from "../../utils";

const meta: Meta<typeof Combobox> = {
  title: "UI/Combobox",
  component: Combobox,
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const animals = [
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

export const Default: Story = {
  render: () => <Combobox />,
};

export const WithHelpText: Story = {
  render: () => (
    <Combobox
      label="Animals"
      options={animals}
      helpText="Please select an option."
    />
  ),
};

export const Loading: Story = {
  render: () => (
    <Combobox
      label="Animals"
      options={animals}
      helpText="Please select an option."
      isLoading
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <Combobox
      label="Animals"
      options={animals}
      hasError
      helpText="Please select an option."
    />
  ),
};
