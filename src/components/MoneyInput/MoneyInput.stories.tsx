import type { Meta, StoryObj } from "@storybook/react";

import { MoneyInput } from "./MoneyInput";

const meta: Meta<typeof MoneyInput> = {
  title: "UI/MoneyInput",
  component: MoneyInput,
};

export default meta;
type Story = StoryObj<typeof MoneyInput>;

export const Primary: Story = {
  args: {
    label: "Amount",
    currency: "USD",
    symbol: "$",
  },
};
