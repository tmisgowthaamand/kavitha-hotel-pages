// Vercel serverless function to handle TanStack Start SSR
export default async function handler(req, res) {
  try {
    // Import the server entry (Cloudflare Workers format)
    const { default: serverEntry } = await import('../dist/server/index.js');
    
    // Convert Vercel request to Web API Request
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = new URL(req.url || '/', `${protocol}://${host}`);
    
    const request = new Request(url.toString(), {
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
