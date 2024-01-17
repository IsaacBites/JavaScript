class Pessoa{   //classe: Definição do que deve ser o objeto
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
       this.nome = nome
       this.idade = idade 
       this.anoDeNascimento = 2022 - idade
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  //metodo
    }
}

const vitor = new Pessoa('Vitor', 30)  //Instancia: Ocorrencia daquele objeto
const isaac = new Pessoa('Isaac', 22)

vitor.descrever()
isaac.descrever()




