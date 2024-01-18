const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(5)
notas.push(8)

let soma = 0

for (var i = 0; i < notas.length; i++){
    const aux = notas[i]
    soma += aux    //soma = soma + aux

}

console.log(soma / notas.length);
