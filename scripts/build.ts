/**
 * Library bundle build.
 *
 * Emits dual ESM + CJS bundles to dist/ with all dependencies left external
 * (consumers provide them). Type declarations are produced separately by
 * `tsc --emitDeclarationOnly` (see the build:types script).
 */
import { rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });

const shared = {
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  packages: "external" as const,
  sourcemap: "linked" as const,
  target: "browser" as const,
};

const results = await Promise.all([
  Bun.build({ ...shared, format: "esm", naming: "[dir]/index.esm.js" }),
  Bun.build({ ...shared, format: "cjs", naming: "[dir]/index.cjs.js" }),
]);

let failed = false;
for (const result of results) {
  if (!result.success) {
    failed = true;
    for (const log of result.logs) console.error(log);
  }
}

if (failed) process.exit(1);

const outputs = results.flatMap((r) => r.outputs.map((o) => o.path));
console.log(`Built ${outputs.length} files:\n${outputs.join("\n")}`);
