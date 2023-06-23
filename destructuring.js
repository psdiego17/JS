const casal = ['Diêgo', 'Jéssica']

//Sem Destructuring
//const homem = casal[0]
//const mulher = casal[1]

//Com Destructuring
const [homem, mulher] = casal

console.log(homem)
console.log(mulher)

//Destructuring com objeto
const pessoa = {
    nome: 'João',
    idade: 45,
    altuta: 1.70,
    ensinoSuperior: true,
}

const {n, i, ...outros} = pessoa

console.log(n, i, outros)