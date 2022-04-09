// Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let risotoDeCamarão = 60
let vinho = 120
let totalConsumo = risotoDeCamarão + vinho
let taxaServico = 10/100
let valorServico = totalConsumo * taxaServico

const valorTotal = totalConsumo + valorServico

console.log(`O valor do serviço foi: R$ ${valorServico}`) // R$18
console.log(`O valor a pagar é: R$ ${valorTotal}`) //R$ 198