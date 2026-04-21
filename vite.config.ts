import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    viteReact(),
  ],
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    host: true,
  },
});