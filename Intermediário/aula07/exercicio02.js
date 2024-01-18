// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada númeoro Par encontrado

const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < v.length; i++) {
    if (v[i] % 2 === 0) {
        console.log(v[i])
    }
}