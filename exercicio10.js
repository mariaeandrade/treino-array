const desenvolvedores = [
  { nome: "Carlos", nivel: "Junior" },
  { nome: "Fernanda", nivel: "Senior" },
  { nome: "Ricardo", nivel: "Pleno" },
  { nome: "Elisa", nivel: "Junior" },
  { nome: "Gustavo", nivel: "Pleno" }
];

const contagemNiveis = desenvolvedores.reduce((acc, dev) => {

  acc[dev.nivel] = (acc[dev.nivel] || 0) + 1;
  return acc;
}, {});

console.log(contagemNiveis)