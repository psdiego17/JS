function somar(n1 = 0, n2=0){
    resultado = n1 + n2
    return resultado
}

console.log(somar(2, 3))

//Função Anônima
let chamarFuncaoAnonima = function(nome){
    console.log(`Ola ${nome}, isso é uma função anônima`)	
}
   
chamarFuncaoAnonima('Maria')   


/**
 * Funções de callback, 
 * são sunções enviadas como parametros para outras funções, 
 * comum em aplicações assincronas.
 */


//Função principal
function exibirArtigo(id, callbackSucesso, callbackErro){
    if(false){
        callbackSucesso('JS Avançado','Trabalhando com JS') 	
    
    }else{
        callbackErro('Erro ao localizar artigo.')
   }
}

let callbackSucesso = function(titulo, descricao){
    console.log(`${titulo} - ${descricao}`)	
}

let callbackErro = function(erro){
    console.log(`ERRO: ${erro}`)
}
      
exibirArtigo(1, callbackSucesso, callbackErro)