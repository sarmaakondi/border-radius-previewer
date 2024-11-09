import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";
import pluginPurgeCss from "vite-plugin-purgecss-updated-v5";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteCompression({
            algorithm: "brotliCompress",
            threshold: 1025,
            verbose: true,
        }),
        pluginPurgeCss({ variables: true }),
    ],
    build: {
        minify: "terser",
        terserOptions: { compress: { drop_console: true } },
    },
    base: "/border-radius-previewer/",
});
