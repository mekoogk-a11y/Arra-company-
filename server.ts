import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Project request / inquiry submission
  app.post('/api/rfp-submit', (req, res) => {
    const { name, phone, projectType, location, details } = req.body;
    console.log('Project Request Received:', { name, phone, projectType, location, details });
    res.json({ 
      success: true, 
      referenceNumber: `ARRA-${Date.now().toString().slice(-6)}`,
      message: 'تم استلام طلب المشروع بنجاح. سيقوم الفريق الهندسي بدراسة المتطلبات والتواصل معكم.' 
    });
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
