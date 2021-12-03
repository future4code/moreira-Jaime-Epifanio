const somaDoisNumeros = (numero1, numero2) => {
     const soma = numero1 + numero2
     return soma
 }
     const resultado = somaDoisNumeros(15, 15)
     console.log("resultado", resultado)

 
 
 
  const recebeNumeros = (numero3, numero4) => {
      return numero3 >= numero4
 }
     const resultadoDaComparacao = recebeNumeros(4, 2)
     console.log(resultadoDaComparacao)

     const numeroPar = (numero5) => {
         return numero5 % 2 === 0

       
     }
     const resultadoNumeroPar = numeroPar(2)
     console.log(resultadoNumeroPar)



     function mensagemJaime(mensagem) {
         mensagem = mensagem.toUpperCase()

         return mensagem

     }
     const mensagemComString = mensagemJaime ("Estou aprendendo Funções com Javascript!!") 
     console.log(mensagemComString.length,mensagemComString)