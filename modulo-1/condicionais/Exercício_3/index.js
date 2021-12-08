let turnoDeEstudo = prompt("Por favor, digite seu turno de estudos com M (matutino) ou V (Vespertino) ou N (Noturno)")
let estudo = turnoDeEstudo.toUpperCase()
switch (estudo) {
  case "M":
    mensagem = "Bom Dia!"
    break;
  case "V":
    mensagem = "Boa Tarde!"
    break;
  case "N":
    mensagem = "Boa Noite!"
    break;
  default:
    mensagem = "Não entendi!! Por favor digite novamente: M / V / N para eu identificar qual turno você estuda"
    break;
}
console.log(mensagem)

