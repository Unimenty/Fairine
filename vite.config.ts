import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    react(),
    vitePrerenderPlugin({
      additionalPrerenderRoutes: [
        "/",
        "/shop",
        "/shop/home-care",
        "/shop/fabric-care",
        "/shop/personal-care",
        "/shop/fragrances",
        "/cart",
        "/contact",
        "/product/liquid-soap",
        "/product/floor-cleaner",
        "/product/fabric-softener",
        "/product/shower-gel",
        "/product/ikeda-perfumes",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
