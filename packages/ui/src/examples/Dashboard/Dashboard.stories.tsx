import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard } from "./Dashboard";

const meta: Meta<typeof Dashboard> = {
  title: "Examples / Dashboard",
  component: Dashboard,
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {
  render: () => <Dashboard />,
};

Default.parameters = {
  layout: "fullscreen",
};
