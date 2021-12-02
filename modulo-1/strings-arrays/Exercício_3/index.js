const listaDeTarefas = []
const perguntaUsuario1 = prompt("Qual é a primeira tarefa que você pretende fazer no seu dia?")
const perguntaUsuario2 = prompt("Qual é a segunda tarefa que você pretende fazer no seu dia?")
const perguntaUsuario3 = prompt("Qual é a terceira tarefa que você pretende fazer no seu dia?")

listaDeTarefas.push(perguntaUsuario1, perguntaUsuario2, perguntaUsuario3)
console.log(listaDeTarefas)

const perguntaUsuario4 = prompt("Escolha uma dentre as 3 opções de tarefas que você já escolheu previamente que você impreterivelmente vai realizar")
console.log(listaDeTarefas.splice(perguntaUsuario4,1))
console.log(listaDeTarefas)




