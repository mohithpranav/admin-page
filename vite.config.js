import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/settings": "http://casper-ai-573fqmg7wa-uc.a.run.app",
    },
  },
});
