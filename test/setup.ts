import { afterEach, expect } from "bun:test";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

// Wire up jest-dom matchers (toBeInTheDocument, etc.) onto Bun's expect.
expect.extend(matchers);

// Unmount React trees between tests to keep the DOM clean.
afterEach(() => {
  cleanup();
});
