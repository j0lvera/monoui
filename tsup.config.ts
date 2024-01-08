import { defineConfig } from "tsup";

export default defineConfig({
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  noExternal: ["react-icons"],
});
