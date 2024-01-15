import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: "Banana", value: "banana" },
  { label: "Apple", value: "apple" },
  { label: "Pear", value: "pear" },
];

export const Default: Story = {
  render: () => (
    <Select label="Fruits" placeholder="Select a fruit" tabIndex={0}>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};

export const HelpText: Story = {
  render: () => (
    <Select
      label="Fruits"
      placeholder="Select a fruit"
      tabIndex={0}
      helpText="Select from an approved list of fruits."
    >
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};

export const WithError: Story = {
  render: () => (
    <Select
      label="Fruits"
      placeholder="Select a fruit"
      tabIndex={0}
      hasError
      helpText="You must select one fruit."
    >
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};
