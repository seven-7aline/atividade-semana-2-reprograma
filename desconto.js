//1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let valorMercadoria = 570
let percentualDeDesconto = (20/100)
let valorDoDesconto = valorMercadoria * percentualDeDesconto    // 570 * 0,20 = 114

const mercadoriaComDesconto = valorMercadoria - valorDoDesconto  // 570 - 114 = 456

    console.log(`Seu desconto foi: R$ ${valorDoDesconto}`) //R$ 114
console.log(`O preço a pagar é: R$ ${mercadoriaComDesconto}`) //R$ 456
