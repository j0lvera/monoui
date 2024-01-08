import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "UI/Box",
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => <Box>Hello world</Box>,
};

export const AsForm: Story = {
  render: () => (
    <Box asChild>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </Box>
  ),
};
