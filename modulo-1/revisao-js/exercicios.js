// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 - Ok
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02 - Ok
function retornaArrayInvertido(array) {
    return array.reverse()

}

// EXERCÍCIO 03 - Ok
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a-b)
}

// EXERCÍCIO 04 - Ok
function retornaNumerosPares(array) {
  const escolhePares = array.filter((num1)=> {
      if (num1 % 2 === 0) {
       return num1 
      }
  })
  return escolhePares  
}

// EXERCÍCIO 05 - Ok
function retornaNumerosParesElevadosADois(array) {
    const escolhePares = array.filter((num1)=> {
        if (num1 % 2 === 0) {
         return num1 
        }
    })
   return escolhePares.map(numQuadrado => numQuadrado ** 2)
}

// EXERCÍCIO 06 - Ok
function retornaMaiorNumero(array) {
  let = 0
  let maior = -Infinity
  for (let i = 0; i < array.length; i++) {
      if(array[i] > maior){
          maior = array[i]
      }
    }
    return maior
}
    

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
function comparaDoisNumeros (num1, num2) {

let numeroMaior = 0
let maiordivisivel
let numeroMenor

if(num1>num2){
    numeroMaior = num1
    numeroMenor = num2

}else{
    numeroMaior = num2
    numeroMenor = num1
}

maiordivisivel = numeroMaior % numeroMenor === 0

const diferença = numeroMaior - numeroMenor

return {
    maioNumero: numeroMaior,
    maiorDivisivelPorMenor: maiorDivisivel,
    diferença
    }

    }
} 



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09 **
function classificaTriangulo(ladoA, ladoB, ladoC) {

            if(ladoA == ladoB && ladoA == ladoC)
                console.log("Equilatero")
            else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC)
                    console.log("Isosceles")
                else
                    console.log("Escaleno")
    }

// EXERCÍCIO 10 **
function retornaSegundoMaiorESegundoMenor(array) {
  

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
let fraseFilmes = filme.atores.join(", ")

     return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${fraseFilmes}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14 - Ok
function retornaContasComSaldoAtualizado(contas) {
      function atualizaSaldo (array) {
        array.array.forEach((contaCliente) => {
            letTotalDeCompras = 0
            contaCliente.compras.forEach((gasto) => {
                totalDeCompras = totalDeCompras + gasto
            })
            contaCliente.saldoTotal = contaCliente.saldoTotal - totalDeCompras
            contaCliente.compras = []
        })
    
    return array
    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}