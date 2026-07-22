export function calcularPrecoFinal(precoBase, descontoPorcentagem, impostoPorcentagem) {
  const valorDesconto = precoBase * (descontoPorcentagem / 100);
  const precoComDesconto = precoBase - valorDesconto;
  const valorImposto = precoComDesconto * (impostoPorcentagem / 100);
  return precoComDesconto + valorImposto;
}
