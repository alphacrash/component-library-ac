import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as packageJson from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: [resolve(__dirname, "src/main.jsx")],
      name: "component-library-ac",
      formats: ["es"],
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies)],
    },
    sourcemap: true,
    minify: true,
  },
});
