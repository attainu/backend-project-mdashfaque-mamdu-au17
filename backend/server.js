import express from 'express';
import data from './data.js';
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('This is the Home page of API');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
