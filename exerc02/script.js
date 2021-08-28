function verificar(){
    var data  = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[--ERRO--] - - - - - - > TENTE NOVAMENTE!!!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'homem_bebe.png')
            } else if(idade <= 30) {
                //jovem
                img.setAttribute('src', 'homem_jovem.png')
            } else if(idade <= 50) {
                //adulto
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem_idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade <= 10){
                //bebe
                img.setAttribute('src', 'mulher_bebe.png')
            } else if(idade <= 30) {
                //jovem
                img.setAttribute('src', 'mulher_jovem.png')
            } else if(idade <= 50) {
                //adulto
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
