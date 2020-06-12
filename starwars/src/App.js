import React, { useState, useEffect } from 'react'
import './App.css'
import logo from './images/usethislogo.png'
import Character from './components/Character'
import axios from 'axios'
import JumboStyle from './components/JumboStyle'

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
      <div className='head'>
      <img src={logo}/>
      </div>
      <h1 className="Header">Characters</h1>
      <JumboStyle>
        {pickleRick.map((item) => (
          <Character cards={item} />
        ))}
      </JumboStyle>
    </div>
  );
}

export default App;
