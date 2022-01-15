// import logo from './logo.svg';
import Mensageiro from './components/Mensageiro';
import Header from './components/Header';
import Main from './components/Main';
import styled from 'styled-components';

const ContainerApp = styled.div`
  display: flex;
  width: 46%;
  height: 100vh;
  border: 1px solid black;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;

`

function App() {
  return (
    <ContainerApp>
      <Header/>
      <Main/>
      <Mensageiro/> 
    </ContainerApp>
  );
}

export default App;
