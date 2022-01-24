import React from 'react';
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


export default class Form1 extends React.Component {

    render() {
        return (

            <Container>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <form>
                    <ul>
                        <li><h2>1. Qual é o seu nome?</h2><input /></li>

                        <li><h2>2. Qual é a sua idade?</h2><input /></li>

                        <li><h2>3. Qual é o seu e-mail?</h2><input /></li>

                        <li><h2>4. Qual é a sua escolaridade?</h2></li>

                        <li><select>
                            <option>Ensino Médio Incompleto</option>
                            <option>Ensino Médio Completo</option>
                            <option>Ensino Superior Incompleto</option>
                            <option>Ensino Superior Completo</option>
                        </select></li>

                        <li><button onClick={this.props.proximaPagina} type="button">Próxima Etapa</button></li>
                    </ul>
                </form>
            </Container>
        );
    }
}










