const objeto1 = {
    nome: "Jaime",
    idade: 36,
    profissão:"Estudante"  
}

const objeto2 = {
    nome: "Pedro",
    idade: 39,
    profissão:"Engenheiro" 
}

const dadosObjetos = (objeto) => {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão, objeto.profissão.length]
}

console.log(dadosObjetos(objeto1))
console.log(dadosObjetos(objeto2))