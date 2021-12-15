const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a)ok
 function retornaNomesDogs(cachorro){
         return cachorro.nome
 }

 const nomesCachorros = pets.map(retornaNomesDogs)
 console.log(nomesCachorros)

//b)ok
 const filtraDogsSalsicha = (item, indice, vetor) =>{
     return item.raca === "Salsicha"
 }
const cachorrosTipoSalsicha = pets.filter(filtraDogsSalsicha)
console.log(cachorrosTipoSalsicha)

//c)ok
const liberaDescontoPoodle = pets.filter((item) => {
    return item.raca === "Poodle"  
}) 

const enviaMsgCliente = liberaDescontoPoodle.map((item) =>  {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
console.log(enviaMsgCliente)    
