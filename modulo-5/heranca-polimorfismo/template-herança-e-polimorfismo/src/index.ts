// Herança
//Exercício 1 

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }

      public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public getPassword(): string {
        return this.password
    }
  }

// a) Resposta: Não porque ela está como privada, não foi declarada pública.
// b) Resposta: 3 vezes porque foram as únicas 3 possibilidades que foram declaradas como publicas.

const consultUser = new User("1","hotmail","Jaime","123")
console.log(consultUser.getEmail())
console.log(consultUser.getId())
console.log(consultUser.getName())

//----------------------------------------------------------------------------------------------------

//Exercício 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  // a) Resposta: Foi impressa 5 vezes.
  const Constructor1 = new Customer ("5", "Pedro", "pedro@hotmail.com", "123", "25")
  console.log(Constructor1.getId(), Constructor1.getName(), Constructor1.getEmail(), Constructor1.getCreditCard(), Constructor1.purchaseTotal)
  
  //b) Resposta: Foi impressa 3 vezes porque foram informados 3 dados públicos sobre o usuário.
  const Constructor2 = new User ("3", "Ricardo", "ric@hotmail.com", "123")  
  console.log(Constructor2.getId(), Constructor2.getName(), Constructor2.getEmail())
 
//----------------------------------------------------------------------------------------------------

//Exercício 3
// a) Resposta: Sim, é possível se transforma-lá numa função get e torna-la Public ao invés de Private.
const Constructor3 = new Customer ("4", "robs@hotmail.com", "Roberto", "123", "255")
  console.log(Constructor3.getId(), Constructor3.getName(), Constructor3.getEmail(), Constructor3.getCreditCard(), Constructor3.getPassword(), Constructor3.purchaseTotal)

//----------------------------------------------------------------------------------------------------

//Exercício 4
// b) Resposta: 
console.log(Constructor3.interoduceYourself())
 
//----------------------------------------------------------------------------------------------------

//Exercício 5
// b) Resposta: 
console.log(Constructor3.interoduceYourself())

//----------------------------------------------------------------------------------------------------

// Polimorfismo