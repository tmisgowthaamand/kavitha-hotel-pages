// Vercel serverless function to handle TanStack Start SSR
import { readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
  try {
    const url = new URL(req.url || '/', `https://${req.headers.host}`);
    const pathname = url.pathname;

    // Serve static assets from dist/client
    if (pathname.startsWith('/assets/') || pathname === '/robots.txt' || pathname.endsWith('.css') || pathname.endsWith('.js') || pathname.endsWith('.jpg') || pathname.endsWith('.png') || pathname.endsWith('.svg')) {
      try {
        const filePath = join(__dirname, '..', 'dist', 'client', pathname);
        const content = await readFile(filePath);
        
        // Set appropriate content type
        const ext = pathname.split('.').pop();
        const contentTypes = {
          'css': 'text/css',
          'js': 'application/javascript',
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'svg': 'image/svg+xml',
          'txt': 'text/plain',
        };
        
        res.setHeader('Content-Type', contentTypes[ext] || 'application/octet-stream');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.status(200);
        res.send(content);
        return;
      } catch (err) {
        console.error('Static file not found:', pathname, err);
        res.status(404).send('Not Found');
        return;
      }
    }

    // Import the server entry (Cloudflare Workers format)
    const { default: serverEntry } = await import('../dist/server/index.js');
    
    // Convert Vercel request to Web API Request
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const fullUrl = new URL(req.url || '/', `${protocol}://${host}`);
    
    const request = new Request(fullUrl.toString(), {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    // Call the Cloudflare Workers-style fetch handler
    const response = await serverEntry.fetch(request, {}, {});
    
    // Convert Web API Response to Vercel response
    const body = await response.text();
    
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    res.status(response.status);
    res.send(body);
  } catch (error) {
    console.error('Server error:', error);
    console.error(error.stack);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}
