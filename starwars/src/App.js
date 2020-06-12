import React, { useState, useEffect } from 'react'
import './App.css'
import Character from './components/Character'
import axios from 'axios'

const App = () => {

  const [pickleRick, setPickleRick] =useState([])

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(response => setPickleRick(response.data.results))
    .catch(error => console.log('Error'))
  }, )



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
        {pickleRick.map((item) => (
          <Character cards={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
