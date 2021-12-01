const inserirNumero1 = Number(prompt("Por favor, insira o primeiro número!"))
const inserirNumero2 = Number(prompt("Por favor, insira o segundo número!"))

let comparacao
comparacao =  inserirNumero1 > inserirNumero2
console.log("Resultado da Comparação 1 é:", comparacao)

comparacao =  inserirNumero1 === inserirNumero2
console.log("Resultado da Comparação 2 é:", comparacao)

comparacao =  inserirNumero1 % inserirNumero2 === 0
console.log("Resultado da Comparação 3 é:", comparacao)

comparacao =  inserirNumero2 % inserirNumero1 === 0
console.log("Resultado da Comparação 4 é:", comparacao)