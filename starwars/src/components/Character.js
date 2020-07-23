// Write your Character component here
import React from 'react'
// import { Jumbotron } from 'reactstrap'
import CardStyle from './CardStyle'


const Character = props => {
    // Make cards for character to loop into
    return (
        <CardStyle>
                <img src={props.cards.image} />
                <h4>{props.cards.name}</h4>
                <h6>Status: {props.cards.status}</h6>
                <h6>Gender: {props.cards.gender}</h6>
                <h6>Species: {props.cards.species}</h6>
        </CardStyle>    
    )   
}


export default Character;