import type { Meta, StoryObj } from "@storybook/react";

import { MoneyValue } from "./MoneyValue";

const meta: Meta<typeof MoneyValue> = {
  title: "UI/MoneyValue",
  component: MoneyValue,
};

export default meta;
type Story = StoryObj<typeof MoneyValue>;

export const Default: Story = {
  args: {
    symbol: "$",
    precision: 2,
    decimal: ".",
    thousand: ",",
    value: 123456.78,
    withColor: true,
    withSign: true,
  },
};

export const Negative: Story = {
  args: {
    symbol: "$",
    precision: 2,
    decimal: ".",
    thousand: ",",
    value: -123456.78,
    withColor: true,
    withSign: true,
  },
};
