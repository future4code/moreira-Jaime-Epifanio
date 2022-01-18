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


export default class PagFinal extends React.Component {

    render() {
        return (

            <Container>
                <h1>O FORMULÁRIO ACABOU</h1>
                
                        <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Container>
        );
    }
}