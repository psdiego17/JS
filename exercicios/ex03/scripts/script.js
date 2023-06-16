function capturarDados(){
    let anoNacimento =  Number.parseInt(document.querySelector('input#ano-nascimento').value)
    let sexo = document.querySelector('input[name=sexo]:checked').value
    /*let sexo = document.getElementsByName('sexo')
        if(sexo[0].checked){
           let genero = 'Homem' 
        }else if(sexo[1].checked){
           let genero = 'Mulher' 
        }
    */
    verificarIdade(anoNacimento, sexo)
}

function verificarIdade(ano=0, sexo=''){
    let texto = document.querySelector('p#texto')
    let s = sexo
    const a = new Date()
    let anoAtual = a.getFullYear()
    let idade = anoAtual - ano

    if(ano == 0 || ano > anoAtual){
        alert('ERRO, verifique o ano de nascimento informado')
    
    }else{
        texto.style.textAlign = 'center'
        texto.innerHTML = `Detectamos um ${s} com ${idade} ano(s).`
            
        carregarFoto(idade, s)
    }
}

function carregarFoto(idade=0, s=''){
    let divFoto = document.querySelector('div#foto')
    divFoto.style.textAlign = 'center'    
    /* 
        //Criando uma tag img
        let img = document.createElemnt('img')
        img.setAttribute('id', 'foto')
    */
    if(s == 'Homem'){
        if(idade >= 0 && idade < 5){
            divFoto.innerHTML = "<img src='imagens/menino-5anos.jpg'>"
            //img.setAttribute('src', 'menino-5anos.jpg')
        
        }else if(idade <= 30){
            divFoto.innerHTML = "<img src='imagens/homem-30anos.jpg'>"    
        }    
    }else if(s == 'Mulher'){
        if(idade >= 0 && idade < 5){
            divFoto.innerHTML = "<img src='imagens/menina-5anos.jpg'>"
        
        }else if(idade <= 30){
            divFoto.innerHTML = "<img src='imagens/mulher-30anos.jpg'>"    
        }   
    }
    //divFoto.appendChild(img)   
}