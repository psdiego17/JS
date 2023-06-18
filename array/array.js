let numeros = [7, 9 , 3, 2]
console.log(numeros)
console.log(numeros[3])

numeros[4] = 8 //Adicionando valor em uma posição especifica do array
console.log(numeros)

numeros.push(6) //Adicionando valor na última posição do array
console.log(numeros)

numeros.sort() //Ordenando o arrary em ordem crescente
console.log(numeros)

console.log(`Tamanho do array: ${numeros.length}`) //Verificar o tamanho do array

console.log(`Procurando valor dentro do array ${numeros.indexOf(17)}`)

for(let n = 0; n < numeros.length; n++){
    console.log(`Na posição ${n} tem o valor: ${numeros[n]}`)
}
console.log('...........')

//For..in
for(let n in numeros){
    console.log(`Na posição ${n} tem o valor: ${numeros[n]}`)
}

//For..of
for(let n of numeros){
    console.log(`Valor ${n}`)
}