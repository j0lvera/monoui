import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";
import { Input } from "../Input";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { cx } from "../../utils";

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
    <Box asChild className={cx(["w-56"])}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("event", event);
        }}
      >
        <Input label="Username" />
        <Divider />
        <Button type="submit" intent="primary">
          Submit
        </Button>
      </form>
    </Box>
  ),
};
