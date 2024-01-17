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

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que a ${p2.nome}`)
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que a ${p1.nome}`)
    }else{
        console.log('Possuem a mesma idade')
    }
}

const vitor = new Pessoa('Vitor', 30)
const isaac = new Pessoa('Isaac', 22)

compararPessoas(vitor, isaac)




