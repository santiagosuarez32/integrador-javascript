import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    outDir: "dist",
  },

  server: {
    open: true,
  },

  plugins: [tailwindcss()],
});
