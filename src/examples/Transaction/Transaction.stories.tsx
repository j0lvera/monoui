import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Transaction } from "./Transaction";

const meta: Meta<typeof Transaction> = {
  title: "Examples / Transaction",
  component: Transaction,
};

export default meta;
type Story = StoryObj<typeof Transaction>;

export const Default: Story = {
  render: () => <Transaction />,
};
