// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Por favor, digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01 ***
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const largura = Number(prompt("Digite a Largura!!"))
const altura = Number(prompt("Digite a Altura!!"))

console.log(altura*largura)
}



// EXERCÍCIO 02 ***
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em qual ano estamos?"))
  const anoDeNascimento = Number(prompt("Em qual ano você nasceu?"))
  
  console.log(anoAtual-anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome!!")
  const idade = prompt("Digite sua idade!!")
  const email = prompt("Digite seu email!!")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt("Digite uma cor favorita!")
  const corFavorita2 = prompt("Digite mais uma cor favorita!")
  const corFavorita3 = prompt("Digite outra cor favorita!")

  const array = [corFavorita1, corFavorita2, corFavorita3]

  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 string = string.toUpperCase()
 return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const elementos = array[0]
   return elementos
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoArray = (array)
return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length -1]
  array [array.length -1] = array[0]
  array [0] = ultimoElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
string1 = string1.toUpperCase()
string2 = string2.toUpperCase()
return string1 === string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}