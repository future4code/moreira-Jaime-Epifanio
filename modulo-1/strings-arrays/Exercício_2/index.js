const fraseMinhasComidas = "Essas são as minhas comidas preferidas:"
console.log(fraseMinhasComidas)

const minhasComidasPreferidas = ["Queijo", "Bolo", "Frango Assado", "Lazanha", "Feijoada"]
console.log(minhasComidasPreferidas)

const comidaFavoritaDoUsuario = prompt("Qual sua comida favorita?")

minhasComidasPreferidas[1] = comidaFavoritaDoUsuario


const fraseParaUsuario = "Um ítem de sua lista foi modificado por uma comida favorita do usuário, confira:"
console.log(fraseParaUsuario)

console.log(minhasComidasPreferidas) 

