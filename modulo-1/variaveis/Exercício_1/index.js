let nomeUsuario 
let idadeUsuario 
console.log(typeof nomeUsuario, typeof idadeUsuario)

/* Automaticamente ao não imputar valor a variável ela retornará undefined. */

nomeUsuario = prompt("Qual é seu nome?")
idadeUsuario =  prompt("Qual sua idade?")
console.log(typeof nomeUsuario, typeof idadeUsuario)

/* Automaticamente sempre que utilizar um Prompt as variáveis serão automaticamente Strings. */

console.log("Olá", nomeUsuario, "você tem", idadeUsuario,"anos.")