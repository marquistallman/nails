const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Aplicación en línea' });
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ message: 'API de Landing Pages - Nail Studio' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📝 API en: http://localhost:${PORT}/health`);
});
