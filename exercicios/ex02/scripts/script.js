function carregar(){
    var mensagem = document.getElementById('mensagem')
    var foto = document.getElementById('imagem')
    var hora = new Date()
    hora = hora.getHours()

    mensagem.innerText = `Agora são ${hora} horas`

    if (hora >=0 && hora < 12){
        foto.src = '../imagens/manha.jpg'
        document.body.style.background = '#e3cd9f'
    
    }else if(hora >= 12 && hora <= 18){
        foto.src = '../imagens/tarde.jpg'
        document.body.style.background = '#b9845f'
    
    }else{
        foto.src = "imagens/noite.jpg"
        document.body.style.background = '#515154'

    } 
}