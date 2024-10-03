import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import * as RadixTabs from "@radix-ui/react-tabs";
import * as $ from "./Tabs";
import { Divider } from "../Divider";

const meta: Meta<typeof $.Tabs> = {
  title: "UI/Tabs",
  component: $.Tabs,
};

export default meta;
type Story = StoryObj<typeof $.Tabs>;

export const Default: Story = {
  render: () => (
    <$.Tabs defaultValue="tab-1">
      <$.List>
        <$.Tab value="tab-1">Trigger 1</$.Tab>
        <$.Tab value="tab-2">Trigger 2</$.Tab>
        <$.Tab value="tab-3">Trigger 2</$.Tab>
      </$.List>
      <Divider />
      <$.Content value="tab-1">
        <p>Content for tab 1</p>
      </$.Content>
      <$.Content value="tab-2">
        <p>Content for tab 2</p>
      </$.Content>
      <$.Content value="tab-3">
        <p>Content for tab 3</p>
      </$.Content>
    </$.Tabs>
  ),
};
