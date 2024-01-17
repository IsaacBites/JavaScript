/* 

    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o IMC (IMC - peso/ (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça oa José para dizer  o valor do seu IMC;

*/

class CalcularIMC{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso =peso;
        this.altura = altura
    }
    
    TotIMC(){
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC(){
        const imc = this.TotIMC()
        if(imc < 18.5){
            return ('Abaixo do peso')
        }else if(imc < 25){
            return ('Peso Normal')  
        }else if(imc < 30){
            return ('Acima do Peso')
        }else if(imc < 40){
            return ('Obeso')
        }else{
            return ('Obesidade Grave')
        }
    }

}

const jose = new CalcularIMC('José', 70 , 1.75)
console.log(`IMC = ${jose.TotIMC().toFixed(2)}`)
console.log(`${jose.classificarIMC()}`)
