import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    ul {
        list-style-type: none;
        padding: 10px;
    }
    li {
        padding: 10px;
    }
`


export default class Form2 extends React.Component {

    render() {
        return (

            <Container>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <form>
                    <ul>
                        <li><h2>5. Qual curso?</h2><input /></li>

                        <li><h2>6. Qual a unidade de ensino?</h2><input /></li>

                        <li><button onClick={this.props.proximaPagina} type="button">Próxima Etapa</button></li>
                    </ul>
                </form>
            </Container>
        );
    }
}
