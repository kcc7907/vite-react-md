import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Mode, plugin as mdPlugin } from "vite-plugin-markdown";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] }),
    ssr({ prerender: true }),
  ],
});
