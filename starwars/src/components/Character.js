// Write your Character component here
import React from 'react'
import { Jumbotron } from 'reactstrap'
import CardStyle from './CardStyle'


const Character = props => {
    // Make cards for character to loop into
    return (
        <CardStyle>
                <img src={props.cards.image} />
                <h1>{props.cards.name}</h1>
                <h3>Status: {props.cards.status}</h3>
                <h3>Gender: {props.cards.gender}</h3>
                <h3>Species: {props.cards.species}</h3>
        </CardStyle>    
    )   
}


export default Character;