import React from 'react';
import styled from 'styled-components'

const ContainerHeader = styled.div`
    background-color: gray;
    color: white;
    text-align: center;
    padding:10px;
`

class Header extends React.Component {
    render (){
        return(
            <ContainerHeader>
            <h1>Whats Lab Jaime</h1>
            </ContainerHeader>

            
        )
    }
}

export default Header;