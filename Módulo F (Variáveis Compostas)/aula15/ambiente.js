let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`Nosso vetor é o ${num}
O primeiro valor do verto é ${num[0]}
O vetor tem ${num.length} posições
Vetor em ordem crescente ${num.sort()}
`)

console.log(`

Inserir valor no final do vetor`)
num.push(1)
console.log(num)

console.log(`

Organizar em ordem crescente`)
num.sort()
console.log(num)

console.log(`

Utilizando FOR`)

for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`

Utilizando outra forma de FOR`)

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(`

Encontrar o valor informado`)
console.log(`O valor 8 está na posição ${num.indexOf(8)}`)
console.log(`O valor 7 está na posição ${num.indexOf(7)}`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}