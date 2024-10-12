import React from "react";
import { FaBeer, FaApple } from "react-icons/fa";
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
  render: () => <Button intent="primary">Click me</Button>,
};

export const Secondary: Story = {
  render: () => <Button intent="secondary">Click me</Button>,
};

export const Outline: Story = {
  render: () => <Button intent="outline">Click me</Button>,
};

export const Plain: Story = {
  render: () => <Button intent="plain">Click me</Button>,
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

export const WithIcon: Story = {
  render: () => (
    <Box className={cx(["space-x-2"])}>
      <Button>
        <FaBeer />
        Click me
      </Button>

      <Button intent="primary">
        <FaApple />
        Click me
      </Button>
    </Box>
  ),
};

export const OnlyIcon: Story = {
  render: () => (
    <Box className={cx(["space-x-2"])}>
      <Button onlyIcon aria-label="Click me">
        <FaBeer />
      </Button>

      <Button intent="primary" onlyIcon aria-label="Click me">
        <FaApple />
      </Button>
    </Box>
  ),
};

export const Loading: Story = {
  render: () => (
    <Box className={cx(["space-x-2"])}>
      <Button intent="primary" loading>
        Click me
      </Button>
    </Box>
  ),
};
