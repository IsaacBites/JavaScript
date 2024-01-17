/*Um objeto em JS é uma coleção dinâmica de chave e valor */


const isaac = {
    nome:'Isaac',
    idade: 22,
}


console.log(isaac.nome)
console.log(isaac.idade)
console.log(isaac)

/*Por ser dinâmica, posso adicionar ou remover */

isaac.altura = 1.70   /*Adicionando valor */  
console.log(isaac)

delete isaac.nome   /*Removendo valor */  
console.log(isaac)



const pessoa = {
    nome:'Rafa',
    idade: 21,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

pessoa.nome = 'Vitor';
pessoa.idade = 40
pessoa.descrever()



/*Acessando o objeto de forma mais dinâmica */

const atributo = 'idade'
console.log(pessoa[atributo])

pessoa['nome'] = 'teste' // Alterando de forma dinâmica
pessoa.nome = 'teste' // Alterando de forma direta
