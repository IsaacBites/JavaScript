/*
    2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
    Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

         Saída:
            Maior número par: 10
            Menor número impar: 1
*/

const {gets, print} = require('./funcoes-auxiliares02')

let maior = 0
let menor = Infinity

for (let i = 0; i < 7; i++) {
    let aux = gets()
    if(aux%2 == 0) {
        if(aux > maior){
            maior = aux
        }
    }else{
        if(aux < menor){
            menor = aux
        } 
    }
}

console.log(`Maior número par: ${maior}`)
console.log(`Menor número impar: ${menor}`)