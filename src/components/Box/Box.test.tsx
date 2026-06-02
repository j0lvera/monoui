import { describe, test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Box } from "./Box";

describe("Box", () => {
  test("Check component renders", () => {
    render(<Box data-testid="box">Hello world</Box>);
    const box = screen.getByTestId("box") as HTMLDivElement;
    expect(box.innerHTML).toBe("Hello world");
  });
});
