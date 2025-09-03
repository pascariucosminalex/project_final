import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('salut din pipeline');
});

app.listen(port, () => {
  console.log(`✅ Server pornit pe http://localhost:${port}`);
});
