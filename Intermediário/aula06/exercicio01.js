/*

    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodado.
    Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso

*/

// gastoM = (100 / 10) * 5

class Carros{
    marca;
    cor;
    gastoM;

    constructor(marca,cor,gastoM){
        this.marca = marca;
        this.cor = cor;
        this.gastoM = (100 / 9) * 5.20
    }

    calcular(){
        console.log(`O carro da marca ${this.marca} e de cor ${this.cor} gasta ${this.gastoM.toFixed(2)} reais para percorrer o percurso`)
    }
}

const Uno = new Carros('Fiat', 'Azul')
Uno.calcular()