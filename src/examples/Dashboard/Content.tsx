import * as React from "react";
import { Box } from "../../components/Box";
import { cx } from "../../utils";
import { Header } from "./Header";

const Content = () => {
  return (
    <>
      <Header />
      <Box className={cx(["py-10"])} asChild>
        <main>
          <Box className={cx(["px-4", "sm:px-6", "lg:px-8"])}>
            <p className={cx(["text-mono-text"])}>Dashboard content</p>
          </Box>
        </main>
      </Box>
    </>
  );
};

export { Content };
