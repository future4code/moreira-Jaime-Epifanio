const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)ok
 function retornaNomesProdutos(produto){
             return produto.nome
     }
    
     const nomesProdutos = produtos.map(retornaNomesProdutos)
     console.log(nomesProdutos)

//b)ok   
const gerarDesconto = produtos.map((item) =>{
// const precosMenosDesconto = item.preco * 0.95        
    return item.nome + ' ' + item.preco * 0.95
    })
    console.log(gerarDesconto)

//c)ok
const filtraBebidas = (item, indice, vetor) =>{
         return item.categoria === "Bebidas"
     }
    const objetosTipoBebida = produtos.filter(filtraBebidas)
    console.log(objetosTipoBebida)

//d)ok
const filtraYpe = produtos.filter((item, index, vetor) => {
          return item.nome.includes("Ypê")
})
console.log(filtraYpe)

//e)ok
function descontoparaYpe(item, index, vetor){
    return item.nome.includes("Ypê")
}

function mensagemParaCliente(item, indice, array){
    return `Compre ${item.nome} por ${item.preco}`
}

const produtoYpe = produtos.filter(descontoparaYpe)
const imprimeFraseYpe = produtoYpe.map(mensagemParaCliente)
console.log(imprimeFraseYpe)


