// - **Exercício 1**
    
//const minhaString :string = 5
// a) Resposta: Ele acusará um erro, porque foi tipado cons minhaString para recebimento de String e o valor é um number

//const meuNumero :number | string = 6
// b) Resposta: Basta aplicar o Union Type permite que um tipo de valor seja um ou outro. ex: string | undefined.  


// Respostas da letra C e D: 
    
enum Cores {Azul = 'Azul', Amarelo = 'Amarelo', Verde = 'Verde', Vermelho = 'Vermelho' }
type Pessoa = {
    nome: string;
    idade: number;
    corFavorita: Cores;
  };
   
  const printPessoa = (person: Pessoa) => {
    console.log(`Meu nome e ${person.nome}`);
    console.log(`Minha idade e ${person.idade}`);
    console.log(`Cor favorita ${person.corFavorita}`)
  }
   
  printPessoa({nome: 'Juca', idade: 32, corFavorita: Cores.Vermelho});
  