import * as React from "react";
import { Box } from "../../components/Box";
import { cx } from "../../utils";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Flyout } from "../../components/Flyout";

const Dashboard = () => {
  return (
    <Box className={cx(["flex", "flex-col"])}>
      <Box
        className={cx([
          "hidden",
          "lg:fixed",
          "lg:inset-y-0",
          "lg:z-50",
          "lg:flex",
          "lg:w-72",
          "lg:flex-col",
        ])}
      >
        <Sidebar />
      </Box>
      <Box className={cx(["lg:pl-72"])}>
        <Content />
      </Box>
    </Box>
  );
};

export { Dashboard };
