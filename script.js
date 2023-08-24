// array
// Estrutura que permite que armazenamos diversos tipos de dados, dos mais variados tipos. string, booleano, number, função, variável.

//  [] colchetes
//  () parenteses
//  {} chaves

// ela nunca vai mudar, uma vez que você definiu o valor 2000, sempre será 2000
const anoNascimento = 2000


const pais = "BR"

const cpf = 123456789

// já a const não conseguimos

// a let conseguimos reatribuir o valor, ou seja mudar o valor...


let idade = 20

idade = 21


console.log(idade)

let info = [
    anoNascimento, // 0
    idade, // 1
    "palavra", // 2
    20, // 3
    true, // 4
    false, // 5
    "bom dia" // 6
]

console.log(info[6])

console.log(info)




info[6] = "boa tarde"
info[0] = "bom dia"
info[1] = "boa noite"


console.log(info)

// métodos são ações nativas da linguagens que facilitam a escrita e a lógica do nosso código.

// métodos de array

// push() -> ele vai adicionar uma informação ao final do nosso array

// info.push("olá tudo bem?")

// console.log(info)

// unshift() -> vai adicionar uma informação ao começo do nosso array

// info.unshift("estou mexendo com array")

// console.log(info)

// remover as informações do nosso array

// shift() -> vai retirar uma informação do começo do nosso array

// info.shift()

// console.log(info)

// // pop() -> vai retirar uma informação do final do nosso array

// info.pop()

// console.log(info)


// splice() -> 3 em 1 ele adiciona, remove e substitui uma informação

// adicionar uma informação

// a partir da posição 2
// não tire ninguém 
// e adicione naiara

// info.splice(2,0,'naiara')

// remove uma informação
// info.splice(2, delete 'naiara')
// info.splice(2,1)


// info.splice(3,4)

// substituir 

// info.splice(3,1,1000)

// info.splice(2,1,"bebida")

// info.splice(6,1,"olá")

// info.splice(1,2,"oi","como vai?")

// console.log(info)


// sort() -> é um metodo de ordenação (organizar) em ordem alfabetica, crescente e decrescente

// let numeros = [1,6,2,3,7,9,8,4,5]

// console.log(numeros.sort())

// let nomes = ["karynne","carol","naiara","joy","evelyn","merry","kleber","grazy","joao"]

// console.log(nomes.sort())