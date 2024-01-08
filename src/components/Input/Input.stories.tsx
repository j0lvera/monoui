import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Input } from "./Input";
import { cx } from "../../utils";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <Box className={cx(["w-96"])}>
      <Input label="Name" />
    </Box>
  ),
};

export const Money: Story = {
  render: () => (
    <Box className={cx(["w-96"])}>
      <Input label="Balance" money />
    </Box>
  ),
};

export const helpText: Story = {
  render: () => (
    <Box className={cx(["w-96"])}>
      <Input label="Address" helpText="Provide full address and zip code." />
    </Box>
  ),
};

export const WithError: Story = {
  render: () => (
    <Box className={cx(["w-96"])}>
      <Input
        label="Address"
        hasError
        helpText="Provide full address and zip code."
      />
    </Box>
  ),
};
