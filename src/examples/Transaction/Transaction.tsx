import React from "react";
import * as Card from "../../components/Card";
import * as Tabs from "../../components/Tabs";
import { cx } from "../../utils";
import { Input } from "../../components/Input";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Select, SelectItem } from "../../components/Select";
import { Label } from "../../components/Common";
import { Divider } from "../../components/Divider";
import { FaTrash } from "react-icons/fa6";

const payees = [
  {
    value: "walmart",
    label: "Walmart",
  },
  {
    value: "target",
    label: "Target",
  },
  {
    value: "amazon",
    label: "Amazon",
  },
];

const categories = [
  {
    value: "groceries_with_long_value",
    label: "Groceries with a very long label",
  },
  {
    value: "bills",
    label: "Bills",
  },
];

const Transaction = () => {
  return (
    <Box className={cx(["w-full"])}>
      <Card.$ paddless>
        <Card.Header>
          <Card.Title>Add transaction</Card.Title>
        </Card.Header>
        <Card.Body>
          <form onSubmit={(event) => event.preventDefault()}>
            <Input type="date" label="Date" />

            <Box className={cx(["py-2"])} />

            <Select label="Payee" placeholder="Select a payee" fullWidth>
              {payees.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>

            <Divider border size="2xl" />

            <Tabs.$ defaultValue="split" fullWidth>
              <Tabs.List>
                <Tabs.Tab value="single">Single</Tabs.Tab>
                <Tabs.Tab value="split">Split</Tabs.Tab>
              </Tabs.List>
              <Tabs.Content value="single" fullWidth>
                <Divider />
                <Input label="Amount" money fullWidth />
                <Divider />
                <Select
                  label="Category"
                  placeholder="Select a category"
                  fullWidth
                >
                  {categories.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              </Tabs.Content>
              <Tabs.Content value="split">
                <Divider />
                <Box
                  className={cx([
                    "rounded-lg",
                    "flex",
                    "flex-col",
                    "space-y-1",
                  ])}
                >
                  <Box
                    className={cx([
                      "flex",
                      "justify-between",
                      "items-center",
                      "bg-gray-100",
                      "rounded-lg",
                    ])}
                  >
                    <Button intent="plain" asChild>
                      <a href="#">$100.00</a>
                    </Button>
                    <Box className={cx(["text-left"])}>INFLOW</Box>
                    <Button size="sm" intent="plain">
                      <FaTrash />
                    </Button>
                  </Box>

                  <Box
                    className={cx([
                      "flex",
                      "justify-between",
                      "items-center",
                      "bg-gray-100",
                      "rounded-lg",
                    ])}
                  >
                    <Button intent="plain" asChild>
                      <a href="#">$20.00</a>
                    </Button>
                    <Box className={cx(["text-left"])}>OUTFLOW</Box>
                    <Button size="sm" intent="plain">
                      <FaTrash />
                    </Button>
                  </Box>
                  <Box
                    className={cx([
                      "flex",
                      "flex-row",
                      "justify-between",
                      "items-center",
                      "p-4",
                      "bg-gray-100",
                      "rounded-lg",
                    ])}
                  >
                    <Box className={cx(["text-mono-text"])}>Balance:</Box>
                    <Box className={cx(["text-lg", "text-zinc-800"])}>
                      $0.00
                    </Box>
                  </Box>
                </Box>

                <Divider />

                <Box className={cx(["flex", "flex-row"])}>
                  <Box className={cx(["w-1/2"])}>
                    <Input label="Amount" money fullWidth />
                  </Box>
                  <Divider />
                  <Box className={cx(["w-1/2"])}>
                    <Select
                      label="Category"
                      placeholder="Select a category"
                      fullWidth
                    >
                      {categories.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </Box>
                </Box>
                <Divider size="sm" />
                <Box>
                  <Button intent="primary" fullWidth>
                    Add entry
                  </Button>
                </Box>
                <Divider size="sm" />
              </Tabs.Content>
            </Tabs.$>

            <Divider />

            <Box className={cx(["py-2"])} />
          </form>
        </Card.Body>
        <Card.Footer className={cx(["flex", "justify-between"])}>
          <Button>Cancel</Button>
          <Button intent="primary">Save</Button>
        </Card.Footer>
      </Card.$>
    </Box>
  );
};

export { Transaction };
