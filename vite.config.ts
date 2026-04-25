import { defineConfig } from "vite";
import type { Plugin } from "vite";
import { readFileSync } from "node:fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

type BundleFile = { type: "asset" | "chunk"; fileName: string; source?: string | Uint8Array; isEntry?: boolean };

const isBundleFile = (file: unknown): file is BundleFile =>
  typeof file === "object" && file !== null && "type" in file && "fileName" in file;

function staticHtmlPlugin(): Plugin {
  return {
    name: "static-html-entry",
    generateBundle(_, bundle) {
      const files = Object.values(bundle).filter(isBundleFile);
      const entry = files.find((file) => file.type === "chunk" && file.isEntry);
      if (!entry) return;

      const cssLinks = files
        .filter((file) => file.type === "asset" && file.fileName.startsWith("assets/") && file.fileName.endsWith(".css"))
        .map((file) => `    <link rel="stylesheet" href="/${file.fileName}" />`)
        .join("\n");

      const script = `    <script type="module" src="/${entry.fileName}"></script>`;
      const source = readFileSync("index.html", "utf8")
        .replace(/\s*<script\b[^>]*><\/script>/g, "")
        .replace("  </head>", `${cssLinks ? `${cssLinks}\n` : ""}  </head>`)
        .replace("  </body>", `${script}\n  </body>`);

      this.emitFile({ type: "asset", fileName: "index.html", source });
      this.emitFile({ type: "asset", fileName: "404.html", source });
    },
  };
}

export default defineConfig({
  base: "/",
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
