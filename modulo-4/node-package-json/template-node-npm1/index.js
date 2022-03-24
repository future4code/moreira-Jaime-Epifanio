//......Exercício 1......................................................................................................

const nome = (process.argv[2])
const idade = Number(process.argv[3])
const primeiraMensagem = `Olá, ${nome}! Você tem ${idade} anos.`

const futuraIdade = (idade + 7)
const segundaMensagem = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${futuraIdade}`

console.log(primeiraMensagem)

