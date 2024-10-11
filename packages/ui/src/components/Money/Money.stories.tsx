import type { Meta, StoryObj } from "@storybook/react";

import { MoneyInput } from "./Money";

const meta: Meta<typeof MoneyInput> = {
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
