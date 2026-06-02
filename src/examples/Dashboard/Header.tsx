import * as React from "react";
import { FaCog } from "react-icons/fa";
import { FaBars, FaDoorOpen, FaUserLarge } from "react-icons/fa6";
import { Box } from "../../components/Box";
import { cx } from "../../utils";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { Dropdown } from "../../components/Dropdown";
import { Flyout } from "../../components/Flyout";
import { Sidebar } from "./Sidebar";

const userNav = [
  {
    label: "Your Profile",
    value: "/profile",
    icon: FaUserLarge,
  },
  {
    label: "Settings",
    value: "/settings",
    icon: FaCog,
  },
  {
    label: "Sign out",
    value: "/sign-out",
    icon: FaDoorOpen,
  },
];

const Header = () => {
  return (
    <Box
      className={cx([
        "sticky",
        "top-0",
        "z-40",
        "flex",
        "h-16",
        "shrink-0",
        "items-center",
        "gap-x-4",
        "border-b-2",
        "border-mono-border",
        "bg-white",
        "px-4",
        "sm:gap-x-6",
        "sm:px-6",
        "lg:px-8",
      ])}
    >
      <Box className={cx(["flex", "w-full"])}>
        <Flyout
          side="left"
          className={cx(["border-0"])}
          trigger={
            <Button intent="plain" aria-label="Open sidebar">
              <FaBars />
            </Button>
          }
        >
          <Sidebar />
        </Flyout>

        <Divider
          className={cx(["ml-auto"])}
          border
          orientation="vertical"
          size="xl"
        />

        <Box>
          <Dropdown options={userNav}>
            <Button intent="plain">
              <FaUserLarge />
            </Button>
          </Dropdown>
        </Box>
      </Box>
    </Box>
  );
};

export { Header };
