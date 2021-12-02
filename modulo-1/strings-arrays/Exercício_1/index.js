const nomeDoUsuario = prompt("Qual é seu nome??")
const emailDoUsuario = prompt("Qual é seu e-mail??")
const fraseTemplateString = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}.`

console.log(fraseTemplateString)