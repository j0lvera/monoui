import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Combobox } from "./Combobox";
import { cx } from "../../utils";

const meta: Meta<typeof Box> = {
  title: "UI/Combobox",
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

const animals = [
  { label: "Cat", value: "cat" },
  { label: "Dog", value: "dog" },
  { label: "Bird", value: "bird" },
  { label: "Elephant", value: "elephant" },
  { label: "Mouse", value: "mouse" },
  { label: "Rabbit", value: "rabbit" },
  { label: "Tiger", value: "tiger" },
  { label: "Lion", value: "lion" },
  { label: "Monkey", value: "monkey" },
  { label: "Panda", value: "panda" },
];

// export const Default: Story = {
//   render: () => (
//     <Combobox label="Animals" items={animals}>
//       {animals.map((animal) => (
//         <ComboboxItem key={animal.value}>{animal.label}</ComboboxItem>
//       ))}
//     </Combobox>
//   ),
// };

export const Default: Story = {
  render: () => <Combobox label="Animals" options={animals} />,
};
