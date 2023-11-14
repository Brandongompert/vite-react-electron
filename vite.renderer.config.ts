import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      "@components": "/src/components/",
      "@pages": "/src/pages/",
      "@hooks": "/src/hooks/",
      "@utils": "/src/utils/",
    },
  },
});
