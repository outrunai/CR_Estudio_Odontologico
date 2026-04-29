import { defineCliConfig } from "sanity/cli";
import type { UserConfig } from "vite";

export default defineCliConfig({
  api: {
    projectId: "tus5kiby",
    dataset: "production",
  },
  studioHost: "crestudio",
  vite(config: UserConfig): UserConfig {
    return {
      ...config,
      optimizeDeps: {
        ...(config.optimizeDeps ?? {}),
        disabled: true,
      },
    };
  },
});
