import express from 'express';

const app = express();
const PORTA = 3000;

app.get('/', (req, res) => {
  res.send('Servidor da loja de peças está no ar!');
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

