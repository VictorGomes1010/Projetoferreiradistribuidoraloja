async function buscarProdutos() {
  const resposta = await fetch("https://fakestoreapi.com/products");
  const produtos = await resposta.json();
  console.log(produtos);
}

buscarProdutos();