const produtos = [
  { id: 1, nome: "Teclado" },
  { id: 2, nome: "Mouse" },
  { id: 3, nome: "Monitor" }
];
const idParaRemover = 2;

const produtosAtualizados = produtos.filter(p => p.id !== idParaRemover);

console.log(produtosAtualizados)