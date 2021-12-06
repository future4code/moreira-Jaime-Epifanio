//a.
const pessoa = {
    nome: "Jaime", 
    apelidos: ["Jaimito", " James",  " Jaiminho"]
}
 
const outraPessoa = (nick) => {
console.log(`Meu nome é ${nick.nome}, mas pode me chamar de: ${nick.apelidos[0]}, ${nick.apelidos[1]}, ou ${nick.apelidos[2]}`)
}

outraPessoa(pessoa)
 //b.

 const novosApelidos = {
    ...pessoa,
    apelidos: ["Zóio", " Carteiro",  " Zé"]
}

outraPessoa(novosApelidos)