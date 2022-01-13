import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Estilizacao = styled.input`
  border-radius: 10px;
  margin-bottom: 40px;

`

class App extends React.Component {

  state ={

    postagens: [
      {
          nomeUsuario:'paulinha',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
      },
      {
          nomeUsuario:'luiza',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://images.unsplash.com/photo-1640622660721-45b83554ab05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
          nomeUsuario: 'ricardinho',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://images.unsplash.com/photo-1641811496491-acdc69cfce89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
      },
    ],  

    valorInputUsuario: "",
    valorInputfotoUsuario: "",
    valorInputfotoPost: ""
  };

  adicionaPostagem = () => {
    
    const novaPostagem = {
      
      nomeUsuario: this.state.valorInputUsuario,
      
      fotoUsuario: this.state.valorInputfotoUsuario,

      fotoPost: this.state.valorInputfotoPost
    };

    const novoPostagens = [...this.state.postagens, novaPostagem];

    this.setState({ postagens: novoPostagens });

  };

  onChangeInputUsuario = (event) => {
    
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputfotoUsuario = (event) => {
    
    this.setState({ valorInputfotoUsuario: event.target.value });
  };

  onChangeInputfotoPost = (event) => {
    
    this.setState({ valorInputfotoPost: event.target.value });
  };

    render() {

    const listaPostagens = this.state.postagens.map((posts,index) => {
      return ( <Post
          nomeUsuario={posts.nomeUsuario}  
          fotoUsuario={posts.fotoUsuario}  
          fotoPost={posts.fotoPost}
        />
      );
    });      

    return (
      <MainContainer>
        <h1>Jaimebook</h1>
        <div>
          <Estilizacao
           
            value={this.state.valorInputUsuario}
           
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <Estilizacao
            
            value={this.state.valorInputfotoUsuario}
            
            onChange={this.onChangeInputfotoUsuario}
            placeholder={"Foto de Perfil"}
          />
          <Estilizacao
            
            value={this.state.valorInputfotoPost}
            
            onChange={this.onChangeInputfotoPost}
            placeholder={"Link do Post"}
          />
          <button onClick={this.adicionaPostagem}>adicionar</button> 
          </div>
             {listaPostagens}
      </MainContainer>
    );
  }
}

export default App;
