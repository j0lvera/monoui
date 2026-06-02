import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button";
import { cx } from "../../utils";

const meta: Meta<typeof Dropdown> = {
  title: "UI / Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown
      options={[
        { label: "Profile", value: "/profile" },
        {
          label: "Sign out",
          value: "/sign-out",
          onSelect: (value) => console.log("sign out!", value),
        },
      ]}
    >
      <Button>Open</Button>
    </Dropdown>
  ),
};
