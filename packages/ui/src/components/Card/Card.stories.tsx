import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import * as Card from "./Card";
import { Box } from "../Box";
import { Input } from "../Input";
import { Button } from "../Button";
import { cx } from "../../utils";

const meta: Meta<typeof Card.$> = {
  title: "UI/Card",
  component: Card.$,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Box className={cx(["w-96"])}>
      <Card.$ paddless>
        <Card.Header>
          <Card.Title>Create account</Card.Title>
          <Card.Description>
            Manage all your transactions in one place.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <form onSubmit={(event) => event.preventDefault()}>
            <Input label="Name" />

            <Box className={cx(["py-2"])} />

            <Input label="Type" />

            <Box className={cx(["py-2"])} />

            <Input label="Balance" money />
          </form>
        </Card.Body>
        <Card.Footer className={cx(["flex", "justify-between"])}>
          <Button>Cancel</Button>
          <Button intent="primary">Save</Button>
        </Card.Footer>
      </Card.$>
    </Box>
  ),
};

// Another way to use this component alone is to import the named export
// import { Card } from './Card';
export const Paddless: Story = {
  render: () => (
    <Box className={cx(["w-96"])}>
      <Card.$>
        <p>Dummy content while we create the input components.</p>
      </Card.$>
    </Box>
  ),
};
