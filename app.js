import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

// 🔁 Endpoint principal
app.get('/', (req, res) => {
  res.send('salut din pipeline  🚀');
});

// ❤️ Healthcheck (pentru CI/CD, nginx, Docker)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`✅ Server pornit pe http://localhost:${port}`);
});
