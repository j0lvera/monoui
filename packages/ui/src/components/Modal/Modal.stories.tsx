import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Button } from "../Button";
import * as Card from "../Card";
import { Modal } from "./Modal";
import { cx } from "../../utils";
import { Input } from "../Input";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal>
      <Card.$ paddless borderless>
        <Card.Header>
          <Card.Title>Hello, world.</Card.Title>
          <Card.Description>This is a modal example.</Card.Description>
        </Card.Header>

        <Card.Body>
          <form onSubmit={(event) => event.preventDefault()}>
            <Input label="Name" />

            <Box className={cx(["py-2"])} />

            <Input label="Type" />

            <Box className={cx(["py-2"])} />

            <Input
              label="Balance"
              // money
            />
          </form>
        </Card.Body>

        <Card.Footer className={cx(["flex", "justify-between"])}>
          <Button>Cancel</Button>
          <Button intent="primary">Save</Button>
        </Card.Footer>
      </Card.$>
    </Modal>
  ),
};
