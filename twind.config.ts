// twind.config.ts
import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

// Twind v1 configuration
// Learn more at https://twind.style/installation
export default defineConfig({
  presets: [presetTailwind(), presetAutoprefix()],
});

// Make sure you export your config's URL
// so that it can referenced in islands
export const configURL = import.meta.url;
