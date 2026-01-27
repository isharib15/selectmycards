import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, type ViteDevServer } from "vite";

const CLIENT_ROOT = path.resolve(process.cwd(), "client");
const isTest = process.env.NODE_ENV === "test" || !!process.env.VITEST;

export async function setupVite(app: Express): Promise<ViteDevServer> {
  const vite = await createViteServer({
    root: CLIENT_ROOT,
    server: {
      middlewareMode: true,
      hmr: true,
    },
    appType: "custom",
    configFile: path.resolve(CLIENT_ROOT, "vite.config.ts"),
  });

  app.use(vite.middlewares);
  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(
        path.resolve(CLIENT_ROOT, "index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  return vite;
}

export function serveStatic(app: Express): void {
  const distPath = path.resolve(process.cwd(), "dist", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  app.use("/{*path}", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
