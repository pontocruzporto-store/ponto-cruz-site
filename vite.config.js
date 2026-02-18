import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          markdown: ["react-markdown", "remark-gfm"],
          analytics: ["react-ga4", "react-helmet-async"],
        },
      },
    },
  },
  base: "/",
});
