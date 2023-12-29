/*

1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e aa sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3

Classificação:
 - Média menos que 5, reprovação;
 - Média entre 5 e 7, recuperação;
 - Média acima de 7, passou de semestre 

*/

const n1 = 6
const n2 = 7
const n3 = 7

media = (n1 + n2 + n3) / 3

if(media < 5){
    console.log('Reprovado')
}else if(media < 7){
    console.log('Recuperação')
}else{
    console.log('Aprovado')
}





















