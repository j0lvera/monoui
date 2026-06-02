import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SignUp } from "./SignUp";

const meta: Meta<typeof SignUp> = {
  title: "Examples / SignUp",
  component: SignUp,
};

export default meta;
type Story = StoryObj<typeof SignUp>;

export const Default: Story = {
  render: () => <SignUp />,
};

Default.parameters = {
  layout: "fullscreen",
};
