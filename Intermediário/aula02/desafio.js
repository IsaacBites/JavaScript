/*

Faça um programa para calcular o valor de uma viagem.


Você terá 3 variáveis.Sendo elas:

1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const P_gas  = 6.66
const P_etan = 5.79
const gasto = 10
const distancia = 100

console.log('True = Gasolina; False = Etanol')

let isTipo = true

if (isTipo === true){
    console.log('Seu carro usa gasolina')
    gastoG = (distancia / gasto) * P_gas
    console.log(gastoG.toFixed(2))
}else{
    console.log('Seu carro usa Etanol')
    gastoE = (distancia / gasto) * P_etan    
    console.log(gastoE.toFixed(2))
}
