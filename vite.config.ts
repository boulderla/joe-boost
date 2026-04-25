import { defineConfig } from "vite";
import type { Plugin } from "vite";
import type { OutputAsset, OutputBundle, OutputChunk } from "rollup";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isChunk = (file: OutputAsset | OutputChunk): file is OutputChunk => file.type === "chunk";
const isAsset = (file: OutputAsset | OutputChunk): file is OutputAsset => file.type === "asset";

function staticHtmlPlugin(): Plugin {
  return {
    name: "static-html-entry",
    generateBundle(_, bundle: OutputBundle) {
      const entry = Object.values(bundle).find((file) => isChunk(file) && file.isEntry);
      if (!entry) return;

      const cssLinks = Object.values(bundle)
        .filter((file) => isAsset(file) && file.fileName.startsWith("assets/") && file.fileName.endsWith(".css"))
        .map((file) => `    <link rel="stylesheet" crossorigin href="./${file.fileName}" />`)
        .join("\n");

      const script = `    <script type="module" crossorigin src="./${entry.fileName}"></script>`;
      const source = String((bundle["index.html"] as OutputAsset | undefined)?.source ?? "")
        .replace(/\s*<script\b[^>]*><\/script>/g, "")
        .replace("  </head>", `${cssLinks ? `${cssLinks}\n` : ""}  </head>`)
        .replace("  </body>", `${script}\n  </body>`);

      if (bundle["index.html"]?.type === "asset") bundle["index.html"].source = source;
      if (bundle["404.html"]?.type === "asset") bundle["404.html"].source = source;
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths(), staticHtmlPlugin()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: "assets/index-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
});
