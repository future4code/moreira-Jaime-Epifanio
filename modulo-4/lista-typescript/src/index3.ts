//-----Exercício 3 -------------------------------------------------------------------------------------------- 

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Info = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao: number | null | undefined
}
