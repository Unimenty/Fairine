import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import prerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
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
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/src=\"\//g, 'src=\"https://fairine.com/')
          .replace(/href=\"\//g, 'href=\"https://fairine.com/');
        return renderedRoute;
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
