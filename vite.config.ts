import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgrPlugin(),
      visualizer({ open: process.env.ANALYZE === "true" }),
    ],
    define: {
      "process.env": process.env,
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: "build",
    },
  };
});
