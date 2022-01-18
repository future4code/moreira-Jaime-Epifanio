import React from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import PagFinal from './components/PagFinal';


export default class App extends React.Component {

  state = {
    etapa: 1
  }
    proximaEtapa = () => {
      this.setState({etapa:this.state.etapa + 1});   
  }

  render() {
    const pulandoPagina = () => {
      switch (this.state.etapa) {
        case 1:
          return <Form1 proximaPagina = {this.proximaEtapa} />;
        case 2:
          return <Form2 proximaPagina = {this.proximaEtapa}/>;
          case 3:
          return <Form3 proximaPagina = {this.proximaEtapa}/>;
          case 4:
            return <PagFinal/>;
          default:
          return <div> Erro! Página não encontrada</div>;
      }
    };
      
    
    return ( 
      <div>{pulandoPagina()}</div>

    )
  }
}



