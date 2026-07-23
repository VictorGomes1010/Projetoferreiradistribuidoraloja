import 'dotenv/config';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const app = express();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const PORTA = 3000;

app.get('/', (req, res) => {
  res.send('Servidor da loja de peças está no ar!');
});

app.get('/produtos', async (req, res) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});



