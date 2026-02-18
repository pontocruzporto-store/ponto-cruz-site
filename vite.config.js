import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "assets/critical.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    cssCodeSplit: true,
  },
  base: "/",
});
