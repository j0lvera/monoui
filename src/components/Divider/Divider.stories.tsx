import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Divider } from "./Divider";
import * as Card from "../Card";
import { cx } from "../../utils";

const meta: Meta<typeof Divider> = {
  title: "UI/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <Box>
      Hello world
      <Divider />
      Hello world
    </Box>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Box>
      Hello world
      <Divider border />
      Hello world
    </Box>
  ),
};

export const OnCard: Story = {
  render: () => (
    <Box className={cx(["lead"])}>
      <Card.$>
        <p>
          The first rule of Fight Club is: You do not talk about Fight Club.
        </p>
        <Divider border />
        <p>The second rule of Fight Club is: Always bring cupcakes.</p>
      </Card.$>
    </Box>
  ),
};
