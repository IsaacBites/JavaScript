/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize s códigos da tabela a seguir para ler qual a condição de pagamento escolhida para efetuar o cálculo adequado.

Código Confição de pagamento:
 - À vista Débito, recebe 10% de desconto;
 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 

*/


console.log('Informe o código( 1 - Débito; 2 - Dinheiro ou PIX; 3 - Parcelado):')
const cod = 3
const preco = 10.0

if(cod == 1){
    precoFinal = preco - (preco * 0.1)
    console.log('Desconto de 10%')
    console.log(precoFinal)
}else if(cod == 2){
    precoFinal = preco - (preco * 0.15)
    console.log('Desconto de 15%')
    console.log(precoFinal)
}else if(cod == 3){
    console.log('Deseja Parcelar em quantas vezes?')
    const par = 3

    if(par == 1){
        precoFinal = preco - (preco * 0.1)
        console.log('Desconto de 10%')
        console.log(precoFinal)
    }else if(par == 2){
        console.log('Preço normal sem Juros')
        console.log(preco)  
    }else{
        precoFinal = preco + (preco * 0.1)
    console.log('Desconto de 10%')
    console.log(precoFinal)
    }
}else{
    console.log('Código inválido')
}















