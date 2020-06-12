// Write your Character component here
import React from 'react'


const Character = props => {
    console.log(props.cards)
    // Make cards for character to loop into
    return (
        <div>
            <img src={props.cards.image} />
            <h1>Name: {props.cards.name}</h1>
            <h3>Status: {props.cards.status}</h3>
            <h3>Gender: {props.cards.gender}</h3>
            <h3>Species: {props.cards.species}</h3>
        </div>
    )
}


export default Character;