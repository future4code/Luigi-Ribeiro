import React from "react";

import styled from 'styled-components'


const CardPequenoStyle = styled.div
`
    
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 1s00px;
    
`


function CardPequeno(props)
{
    return(
    <CardPequenoStyle>
        <img src= {props.imagem}/>
        <h4>{props.nome}</h4>
        <p>{props.descricao }</p>

    </CardPequenoStyle>
    )
}

export default CardPequeno;