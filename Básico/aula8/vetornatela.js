let valores = [8, 1, 7, 4, 2, 9]

valores.sort() /*em ordem*/

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*Outra forma de exibir as posições de um vetor*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


/*Buscar por variáveis dentro do vetor*/

let pos = valores.indexOf(7)

console.log(`O valor 7 esta na posição ${pos}`)

/*Se o valor não for encontrado, ele retorna a posição -1*/

let semValor = valores.indexOf(10)

console.log(`O valor de 10 esta na posição ${semValor}`)

