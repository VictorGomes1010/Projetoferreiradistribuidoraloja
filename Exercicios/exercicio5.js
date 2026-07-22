import { calcularPrecoFinal } from './funcoes.js';

const pecas = [
  { nome: "Filtro de óleo", codigo: "FB01", precoBase: 50, desconto: 15, imposto: 10 },
  { nome: "Pastilha de freio", codigo: "SL02", precoBase: 70, desconto: 20, imposto: 10 },
  { nome: "Bomba de agua", codigo: "IND02", precoBase: 130, desconto: 30, imposto: 10 },
];

for (const peca of pecas) {
  const precoFinal = calcularPrecoFinal(peca.precoBase, peca.desconto, peca.imposto);
  console.log(`${peca.nome} - preco final: ${precoFinal}`);
}
