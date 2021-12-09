// // /* Exercício 1: 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
// a) O que vai ser impresso no console? 
//R: Será impresso no console os arrays de 0 a 2 que contem o nome de cada instrutora sendo o array 0 a Amanda, seguido do array 1 a Laura, 
//e o array 2 a Chijo, juntamente com seus respectivos apelidos.



// /* Exercício 2: 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
// a) O que vai ser impresso no console?
//R:Será impresso no console somente os nomes dentro do array devido o pedido de return que pede os itens nome de dentro do array: 
// Array 0: "Amanda Rangel" / Array 1: "Laís Petra" / Array 2: "Letícia Chijo"



// // /* Exercício 3:

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
// a) O que vai ser impresso no console?
// R: Quando pedimos para retornar return item.apelido !== "Chijo" usando em cima o comando .filter, o programa vai fazer um rastreio
// dentre os itens do array todos os itens que que não tiverem o nome Chijo dentro de apelidos, portanto o console imprimira o seguinte:
// os itens nome: "Amanda Rangel", apelido: "Mandi" e o item  nome: "Laís Petra", apelido: "Laura" .