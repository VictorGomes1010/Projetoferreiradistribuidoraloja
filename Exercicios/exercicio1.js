function CalcularPrecoFinal (PrecoBase, descontoPorcentagem, impostoPorcentagem) 
{
const ValorDesconto = PrecoBase * (descontoPorcentagem / 100) ;
const precoComDesconto = PrecoBase - ValorDesconto;
const valorImposto = precoComDesconto * (impostoPorcentagem / 100) ;

return precoComDesconto + valorImposto;
}

const resultado = CalcularPrecoFinal(100, 10, 5);
console.log(resultado);
