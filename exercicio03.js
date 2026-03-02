const precos = [29.9, 50.0, 10.5, 100.0];
const total = precos.reduce((acumulador, precoAtual) => acumulador + precoAtual, 0);

console.log(total)