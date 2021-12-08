// // /* Exercício 1: O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//R: Dentro do for a primeira condição é o (let i = 0) que é de onde a aplicação vai iniciar, depois ela parte para a segunda condição
// que significa enquanto o (i for < 5) o looping vai rodar, por ultimo a terceira condição que é o incremento (i++) o resultado seria 10



// /* Exercício 2: Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a) O que vai ser impresso no console?
//R:Serão impressos os números 19, 21, 23, 25, 27, 30.

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//R: Se eu quiser acessar algum elemento específico dessa lista eu teria que apagar if (numero > 18) e coloca um console.log(listaArray[posição do array desejada]




// // /* Exercício 3: Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// R: O resultado impresso no console é * por linha, se o usuario digitar 4, ele vai imprimir 4 **** na linha 4.
