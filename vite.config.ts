import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '', // Relative paths for better compatibility across deployments
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 800, // Increased limit
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "vendor-react";
          }
          // UI frameworks & utilities
          if (id.includes("node_modules/@radix-ui/") || id.includes("node_modules/lucide-react") || id.includes("node_modules/class-variance-authority")) {
            return "vendor-ui";
          }
          // Router & State
          if (id.includes("node_modules/react-router") || id.includes("node_modules/@tanstack/")) {
            return "vendor-core";
          }
        },
      },
    },
  },
}));
