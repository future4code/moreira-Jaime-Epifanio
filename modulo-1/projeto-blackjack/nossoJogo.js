/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const mensagemParaUsuario = ("Boas vindas ao jogo de Blackjack!")
console.log (mensagemParaUsuario)

let confirmacaoUsuario = confirm("Quer iniciar uma nova rodada?")

if (confirmacaoUsuario)  {
	console.log ("Vamos jogar!") // o que fazer se o usuário clicar "ok"
} else {
	console.log ("O jogo acabou!")// o que fazer se o usuário clicar "cancelar"
}

const cartasParaUsuario = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(`Usuário - cartas: ${cartasParaUsuario.texto} - pontuação ${cartasParaUsuario.valor}` )
         

const cartasParaComputador = comprarCarta();
console.log(`Computador - cartas: ${cartasParaComputador.texto} - pontuação ${cartasParaComputador.valor}`)

const comparacaoDeCartas = (numero1, numero2) => {
if(numero1 > numero2) {
console.log(`O usuário ganhou!`)
}else if(numero1 < numero2) {
console.log(`O computador ganhou`)
}else if(numero1 === numero2) {
console.log(`Empate!`)
}
}
console.log(comparacaoDeCartas(cartasParaUsuario.valor, cartasParaComputador.valor))





