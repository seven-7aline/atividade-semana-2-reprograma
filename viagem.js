//  Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.
//  Dividir a velocidade média/hora pela distância (km).

let distanciaKm = 344
let velocidadeMediaHora = 90

const tempoViagem = (distanciaKm / velocidadeMediaHora).toFixed(2) 

console.log(`O tempo estimado da sua viagem é: ${tempoViagem} horas`)
