import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character.js';

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ characters, setCharacters ] = useState([]);

  const StyledInnerAppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  `

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res);
        setCharacters(res.data.results);
      })
      .catch(err => {console.log(err)}) 
    },[]);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledInnerAppContainer>
        {characters.map((character, idx) => {
          return <Character 
                   name={character.name} 
                   eyeColor={character.eye_color}
                   height={character.height}
                   mass={character.mass}
                   key={idx} />;
        })}
      </StyledInnerAppContainer>
    </div>
  );
}

export default App;
