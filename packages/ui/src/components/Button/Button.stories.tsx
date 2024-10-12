import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { Box } from "../Box";
import { cx } from "../../utils";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: "primary",
    children: "Click me",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    children: "Click me",
  },
};

export const Outline: Story = {
  args: {
    intent: "outline",
    children: "Click me",
  },
};

export const Plain: Story = {
  args: {
    intent: "plain",
    children: "Click me",
  },
};

export const Sizes: Story = {
  render: () => (
    <Box className={cx(["space-x-2"])}>
      <Button size="sm">Click me</Button>
      <Button size="md">Click me</Button>
      <Button size="lg">Click me</Button>
    </Box>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Click me",
  },
};
