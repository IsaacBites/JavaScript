function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO, Verifique seus dados novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/garotinho.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/garotinha.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}