const fraseComInformacoes = "Eu sou Caio, tenho 23 anos, moro em Minas Gerais e não sou estudante."
console.log (fraseComInformacoes)


function trocaDeInformacoes(nome, idade, cidade, estudande) {
        console.log("Eu sou", nome,",tenho ",idade, "anos, moro em ", cidade," e ",estudande)
    }
    trocaDeInformacoes("Jaime", 36, "São Paulo","sou estudante.")



    function dadosPessoais(nome, idade, cidade, profissao) {
        const frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
        return frase
    }

    (dadosPessoais("Jaime",20,"São Paulo","Programador"))
    console.log(dadosPessoais("Pedro",30,"Rio de Janeiro","Professor"))
    (dadosPessoais("João",40,"Curitiba","Advogado"))
    