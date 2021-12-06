//EXERCÍCIO 1
//Leia o código a seguir:

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console?
//R:Primeiro será impresso em console.log(filme.elenco[0])>> a posição 0 dentro do array, que seria essa Matheus Nachtergaele, segundo será 
//impresso em console.log(filme.elenco[filme.elenco.length - 1]) >> a posição 3 do array, por que ele pede um comando.length -1 que rastreia 
// a ultima posição do array que seria essa Virginia Cavendish. Terceiro e ultimo será impresso em console.log(filme.transmissoesHoje[2]) o
//ultimo objeto dentro de trasmissõesHoje que é posição 2 do array canal: "Globo", horario: "14h".

//-------------------------------------------------------------------------------------------------------------------------------------------

//EXERCÍCIO 2
//Leia o código a seguir:

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a) O que vai ser impresso no console?
//R: Será impresso o nome dos 3 nomes diferentes, que representam 3 animais diferentes, sendo Juca o Cachorro / O gato que tem seu nome 
// substituido por Juba / E a tartaruga que tem seu nome substituido por Jubo devido o comando .replaceAll que manda pegar o nome do gato
// que é Juba e trocar a letra "a" pela letra "o" 
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//R: Ela pede para que o Objeto que você está querendo mudar seja substituido por outro que você está querendo imputar.

//-------------------------------------------------------------------------------------------------------------------------------------------

//EXERCÍCIO 3
//Leia o código a seguir:

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
//R: Será impresso false para a linha 69 e undefined para a linha 70 do código.
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//R: A linha 69 apareceu como false porque ao solicitar impressão de console.log(minhaFuncao(pessoa, "backender")) >> lá em cima na linha 66
// dentro do objeto foi definido que é false que Caio seja backender, já na linha 70 ao solicitar impressão de console.log(minhaFuncao(pessoa, "altura"))
// dentro do objeto const pessoa, não tinha sido específicado altura de Caio.