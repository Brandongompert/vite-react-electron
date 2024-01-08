import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  //TODO: HMR on backend
  //   // maybe on the right track for HMR on backend??
  // server: {
  //   port: 3001,
  //   strictPort: true,
  //   // hmr: {
  //   //   host: "localhost",
  //   //   port: 3001,
  //   // },
  // },
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
    alias: {
      "@hooks": "/src/hooks/",
      "@utils": "/src/utils/",
      "@database": "/database/",
      "@api": "/api/",
      "@services": "/src/services/",
    },
  },
});
