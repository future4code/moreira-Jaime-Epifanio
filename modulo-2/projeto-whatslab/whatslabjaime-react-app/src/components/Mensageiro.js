import React from 'react';
import styled from 'styled-components';
import Main from './Main';

const ContainerMensageiro = styled.div`
background: orange;
display:flex;
`

class Mensageiro extends React.Component {
    state = {
    mensagens: [],
    valorInputUsuario: "",
    valorInputMensagem: "",
};

   enviarMensagem = () => {
      const novaMSG = {
      
      user: this.state.valorInputUsuario,
      
      message: this.state.valorInputMensagem,

      
    };

    const msgRecebidas = [...this.state.mensagens, novaMSG];

    
    this.setState({ mensagens: msgRecebidas, valorInputMensagem: '', valorInputUsuario: ''});
  }; 

  onChangeInputUsuario = (event) => {
    
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    
    this.setState({ valorInputMensagem: event.target.value });
  };
  


    render (){
        const listaDeMSG = this.state.mensagens.map((msg) => {
      return (
        <p>
          {msg.user} - {msg.message}
        </p>
      );
    });
        return(
            <ContainerMensageiro>
                <input
                style={{width:'20%'}}
                type="text"
                placeholder="Usuario"
                value={this.state.valorInputUsuario}
                onChange={this.onChangeInputUsuario}        
                />
                <input
                style={{width:'100%'}}
                type="text"
                placeholder="Mensagem"
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem} 
                />
                <button onClick={this.enviarMensagem}> Enviar </button>

            </ContainerMensageiro>            
        )
    }
}

export default Mensageiro;