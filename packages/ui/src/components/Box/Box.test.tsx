import React, { HTMLAttributes } from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Box } from "./Box";

describe("Box", () => {
  test("Check component renders", () => {
    render(<Box data-testid="box">Hello world</Box>);
    const box = screen.getByTestId("box") as HTMLDivElement;
    expect(box.innerHTML).toBe("Hello world");
  });
});
