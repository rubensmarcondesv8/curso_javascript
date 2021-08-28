function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA 
        img.src = 'foto-manha.png'
        window.document.body.style.background = '#ffc7ba'
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'foto-tarde.png'
        window.document.body.style.background = '#f04e43'
    } else {
        //BOA NOITE
        img.src = 'foto-noite.png'
        window.document.body.style.background = '#022a33'
    }
}