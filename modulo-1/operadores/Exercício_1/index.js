const idadeDoUsuario = Number(prompt("Qual é a sua idade?"))
const idadeDoMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo(a)?"))

let comparacao
comparacao = idadeDoUsuario >= idadeDoMelhorAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)

let diferenca
diferenca = idadeDoUsuario - idadeDoMelhorAmigo
console.log("A diferença de idade entre meu amigo e eu é de", diferenca)