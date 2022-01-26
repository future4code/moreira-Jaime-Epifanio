import axios from "axios";
import React from "react";

const urlCadastroUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "jaime-epifanio-moreira"
  }
};

export default class App extends React.Component {
  state = {
    usuarios: [],
    nomeUserInput: "",
    emailUserInput: ""
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(urlCadastroUsers, headers)
      .then((res) => {
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        alert("Ops, algo de errado ocorreu, tente novamente!");
      });
  };

  createUsers = () => {
    const body = {
      name: this.state.nomeUserInput,
      email: this.state.emailUserInput,
    };

    axios
      .post(urlCadastroUsers, body, headers)
      .then((res) => {
        alert(`Usuário ${this.state.nomeUserInput} foi criado com sucesso!`);
        this.setState({ nomeUserInput: "" });
        this.setState({ emailUserInput: "" });
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message);
        this.setState({ nomeUserInput: "" });
      });
  };

  onTypeNameChange = (event) => {
    this.setState({ nomeUserInput: event.target.value });
  };

  onTypeNameEmail = (event) => {
    this.setState({ emailUserInput: event.target.value });
  };

  render() {
    const usersComponents = this.state.usuarios.map((cad) => {
      return <li key={cad.id}>{cad.name}</li>;
    });

    return (
      <div>
        <h1>Labenusers</h1>
        {usersComponents}
        
        <input
          value={this.state.nomeUserInput}
          onChange={this.onTypeNameChange}
          placeholder="Seu Nome"
        />
        <input
          value={this.state.emailUserInput}
          onChange={this.onTypeNameEmail}
          placeholder="Seu e-mail"
        />
        <button onClick={this.createUsers}>Adicionar Usuários</button>
        <div>
        <button>Tela Adicional</button>
        </div>
      </div>
    );
  }
}
