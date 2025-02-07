import { defineConfig } from "vite";

import { SpeedInsights } from "@vercel/speed-insights/next";
// import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
