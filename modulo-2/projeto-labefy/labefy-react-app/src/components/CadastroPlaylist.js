import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const CardBotão1 = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
`

const CardBotaoCriar = styled.button`   
  background-color: yellow;
  margin-top: -6px;
  position: absolute;
  top: 28px;
  left: 890px;
`
const CardInput = styled.input`
  margin: 5px 0px;
  width: 210px;
  `
const CardButtonConfira = styled.button`
  width: 318px;
  `

const CardTitulo = styled.h1`
  color: white;  
`

export default class CadastroPlaylist extends React.Component {
  state = {
    criar: ""
  } 

  handleCriar = (event) => {
    this.setState({criar: event.target.value})
  }

  cadastrarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.criar
    }

    axios.post(url, body, {
      headers: { 
          Authorization: "jaime-epifanio-moreira"
        }
      })
      .then((res) => {
          alert("Sua nova Playlist acaba de ser incluida com sucesso!")
          this.setState({criar: ""})
      })
      .catch((err) => {
          alert(err.response.data.message)
      })
    }

  render() {
    return( 
      <CardBotão1>        
        <CardTitulo>Labefy</CardTitulo>
        <p>Criar Playlist</p>
        <CardBox>
        <CardInput 
          placeholder={"Digite um Gênero"}
          value={this.state.criar}
          onChange={this.handleCriar}
        />
        <CardButtonConfira onClick={this.props.irParaLista}>Confira Suas Playlists Já Criadas</CardButtonConfira>        
        </CardBox>
        <CardBotaoCriar onClick={this.cadastrarPlaylist}>Criar</CardBotaoCriar>
      </CardBotão1>
      )
    }
  }


