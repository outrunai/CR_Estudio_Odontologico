import { defineCliConfig } from "sanity/cli";
import type { UserConfig } from "vite";

export default defineCliConfig({
  api: {
    projectId: "tus5kiby",
    dataset: "production",
  },
  studioHost: "cr-estudio-odontologico",
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
