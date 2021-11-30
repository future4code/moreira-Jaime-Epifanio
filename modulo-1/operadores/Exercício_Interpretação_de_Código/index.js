/* Exercício 1: 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
Primeiro imprime false devido bool1 e bool2 serem diferentes. 

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
Segundo imprime false devido ter pelo menos 1 desses que é o boll1 ser true

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
Terceiro imprime true, porque pelo menos 1 deles é verdadeiro que seria o bool1

console.log("d. ", typeof resultado)
Por ultimo imprime String, subentendendo que em nenhum dos códigos acima foi realizada a conversão para Number
*/



/* Exercício 2: Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Resposta: Sim, há um erro, ele tentou executar um código com Prompt que solicita que seja imputados números, creio que será impresso no console uma concatenação de números entre a primeira declaração e a segunda. 
*/



/* Exercício 3: Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

Resposta: Eu sugiriria a ele converter para Number antes de Prompt.
E o código ficaria assim:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/