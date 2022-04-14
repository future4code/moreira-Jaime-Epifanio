//-----Exercício 1-------------------------------------------------------------------------------------------- 
type Pessoa = {
    nome: string;
    dataNasc: string
}

const imprimeFrase = (person: Pessoa) => {
    const profile: string[] = person.dataNasc.split('/')
    console.log(profile)
    console.log(`Olá me chamo ${person.nome}, nasci no dia ${profile[0]} do mês de ${profile[1]} do ano de ${profile[2]}`)
}
imprimeFrase({nome: 'Jaime', dataNasc: '23/06/1985'});
