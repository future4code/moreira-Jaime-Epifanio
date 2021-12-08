const carrinho = []
const frutasSacolao = [
    {nome: "Carambola", disponibilidade: true},
    {nome: "Laranja", disponibilidade: false},
    {nome: "Manga", disponibilidade: true},
]

const addFruta = (objeto) => {
    return carrinho.push(objeto)
    }
    addFruta(frutasSacolao)
    console.log(carrinho)

