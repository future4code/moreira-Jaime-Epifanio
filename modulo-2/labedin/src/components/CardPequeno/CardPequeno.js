import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="contatos">
            <img src={ props.imagem } />
            <div>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;