/*

1) O IMC - Indice de Massa Corporal é um critério da Organizaçao Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre a sua condição de acordo com a tabela abaixo.

IMC em adultos Condições:
 - Abaixo de 18.5 Abaixo do Peso;
 - Entre 18.5 e 25 Peso Normal;
 - Entre 25 e 30 Acima do Peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obesidade Grave;

*/

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(imc){
    if(imc < 18.5){
        return 'Abaixo do peso'
    }else if(imc < 25){
        return 'Peso Normal'
    }else if(imc < 30){
        return 'Acima do Peso'
    }else if(imc < 40){
        return 'Obeso'
    }else{
        return 'Obesidade Grave'
    }
}
function main(){
    imc = calcularIMC(75, 1.75)
    console.log(classificarIMC(imc))
}

main()






