let pessoa = {
    nome: 'Maria', 
    idade: 55, 
    sexo: 'F', 
    peso: 58.9, 
    engordar(p=0){
        this.peso += p
        console.log(`${this.nome} engordou ${p}Kg e está com ${this.peso}Kg`)
    }
}

pessoa.engordar(3)
console.log(pessoa)