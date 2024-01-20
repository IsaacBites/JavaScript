/*
    1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja >= 5 e < 7 imprima "Recuperação"
    Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação
*/

const {gets, print} = require('./funcoes-auxiliares01')

const m = gets()
if(m < 5){
    console.log('Reprovado')
}else if(m < 7){
    console.log('Recuperação')
}else{
    console.log('Aprovado')
}