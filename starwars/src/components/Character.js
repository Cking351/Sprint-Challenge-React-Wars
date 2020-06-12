// Write your Character component here
import React from 'react'
import { Jumbotron } from 'reactstrap'
import CardStyle from './CardStyle'


const Character = props => {
    // Make cards for character to loop into
    return (
        <CardStyle>
                <img src={props.cards.image} />
                <h3>{props.cards.name}</h3>
                <h5>Status: {props.cards.status}</h5>
                <h5>Gender: {props.cards.gender}</h5>
                <h5>Species: {props.cards.species}</h5>
        </CardStyle>    
    )   
}


export default Character;