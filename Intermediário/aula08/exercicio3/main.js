/*
 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
 Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
 O salário salário a ser transferido é calculado da seguinte maneira: 
   
    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

 Para calcular o percentual de imposto segue as aliquotas:

     De R$ 0.00 a R$ 1100.00 = 5.00%
     De R$ 1100.01 a R$ 2500.00 = 10.00%
     Maior que R$ 2500.00 = 15.00%

     Exemplo:
         Entrada:
             2000
             250

         Saída:
             2050.00
*/

const {gets, print} = require('./funcoes-auxiliares03')

const sal_bruto = gets()
const beneficios = 250

if(sal_bruto <= 1100){
    console.log('5%')
    sal_Final = sal_bruto - (sal_bruto * 0.1) + beneficios
}else if(sal_bruto <= 2500){
    console.log('10%')
    sal_Final = sal_bruto - (sal_bruto * 0.1) + beneficios
}else{
    console.log('15%')
    sal_Final = sal_bruto - (sal_bruto * 0.1) + beneficios
}


console.log(sal_Final)