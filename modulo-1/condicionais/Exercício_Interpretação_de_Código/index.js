// // /* Exercício 1: 
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
//R: O código realiza um teste sendo, números digitados pelo usuário se são divisiveis ou não por 2, se o resultado da resto 0 ou não.

// b) Para que tipos de números ele imprime no console "Passou no teste"?
//R: Números pares, divisiveis por 2 que dá resultado de resto 0. 

// c) Para que tipos de números a mensagem é "Não passou no teste"?
//R: Números ímpares, não divisiveis por 2, que não dão resto 0. 



// /* Exercício 2: 
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//R:O código serve para informar ao usuário o preço da fruta que ele escolheu.

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//R: A mensagem impressa no console se o usuário pedir o valor Maça será de 2,25.

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no 
//console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//R: Ele rodaria o preço determinado em default que é o de 5, uma vez que foi retirado o break de Pera.



// // /* Exercício 3:
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// A primeira linha está pedindo ao usuário para digitar algum número

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se digitar 10 retorna que o teste passou, se digitar -10 não retorna nada.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//