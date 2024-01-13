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
    <Select placeholder="Select a fruit" tabIndex={0}>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};
