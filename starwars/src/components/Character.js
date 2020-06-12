// Write your Character component here
import React from 'react'
import { Jumbotron } from 'reactstrap'
import CardStyle from './CardStyle'


const Character = props => {
    // Make cards for character to loop into
    return (
        <CardStyle>
                <img src={props.cards.image} />
                <h2>{props.cards.name}</h2>
                <h4>Status: {props.cards.status}</h4>
                <h4>Gender: {props.cards.gender}</h4>
                <h4>Species: {props.cards.species}</h4>
        </CardStyle>    
    )   
}


export default Character;