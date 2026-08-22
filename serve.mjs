// Tiny static server for previewing the support/privacy pages locally.
// Not part of the app. Run: node website/serve.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript' };
const PORT = Number(process.env.PORT) || 8090;

createServer(async (req, res) => {
  const path = (req.url || '/').split('?')[0];
  const file = join(ROOT, path === '/' ? 'index.html' : path.replace(/^\/+/, ''));
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('Not found');
  }
}).listen(PORT, () => console.log(`website preview on http://localhost:${PORT}`));
