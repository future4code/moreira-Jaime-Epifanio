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


export default class Form3 extends React.Component {

    render() {
        return (

            <Container>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <form>
                    <ul>
                        <li><h2>5. Por que você não terminou um curso de graduação?</h2><input /></li>

                        <li><h2>6. Você fez algum curso complementar?</h2></li>

                        <li><select>
                            <option>Curso Técnico</option>
                            <option>Curso de Inglês</option>
                            </select></li>

                            <li><button onClick={this.props.proximaPagina} type="button">Próxima Etapa</button></li>
                    </ul>
                </form>
            </Container>
        );
    }
}
