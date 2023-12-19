/*
Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis, Sendo elas:

1 - Preço do combustivel
2 - Gasto médio de combustível do carro por KM
3 - Distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar esta viagem

*/

let preco_combustivel = 5.79
let gasto_combustivel = 12
let distancia = 1580

total_distancia = distancia / gasto_combustivel
total_final = total_distancia * preco_combustivel

console.log(total_final.toFixed(2))  //Formatação das casas decimais