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
      <Input label="name" />
    </Box>
  ),
};
