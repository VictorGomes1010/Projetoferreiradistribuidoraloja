function buscarPecaNoBanco() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nome: "Filtro de óleo", precoBase: 50 });
    }, 2000);
  });
} 

async function main () {
    const peca = await buscarPecaNoBanco ();
    console.log(peca);
}

main();