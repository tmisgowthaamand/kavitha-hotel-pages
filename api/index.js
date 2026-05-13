// Vercel serverless function to handle TanStack Start SSR
import { createRequestHandler } from '@tanstack/react-start/server';

export default async function handler(req, res) {
  try {
    // Import the server entry
    const { default: serverEntry } = await import('../dist/server/index.js');
    
    // Create request handler
    const requestHandler = createRequestHandler({
      build: serverEntry,
    });

    // Convert Vercel request to standard Request
    const url = new URL(req.url || '/', `https://${req.headers.host}`);
    const request = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
    });

    // Handle the request
    const response = await requestHandler(request);
    
    // Convert Response to Vercel response
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    res.status(response.status);
    res.send(await response.text());
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
}
