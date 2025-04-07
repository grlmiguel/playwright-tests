import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 300_000,
  use: {
    headless: true,
  },
  workers: 20, // O pon 50 si tu máquina o GitHub Actions lo aguanta
});
