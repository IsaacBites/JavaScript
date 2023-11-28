function contar(){

    let ini = window.document.getElementById('idinicio')
    let fim = window.document.getElementById('idfim')
    let pas = window.document.getElementById('idpasso')
    let msg = window.document.getElementById('msg')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        
        msg.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        for(var c = i; c <= f; c += p){
            msg.innerHTML +=  `${c} `
        }
    }

}