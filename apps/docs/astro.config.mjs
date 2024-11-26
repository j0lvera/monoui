// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import liveCode from "astro-live-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: "monoui",
      social: {
        github: "https://github.com/j0lvera/monoui",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Navigation",
          items: [{ label: "Button", slug: "navigation/button" }],
        },
      ],
    }),
    liveCode({}),
  ],
});
