import styled from 'styled-components';
import Startgame from './Components/Startgame';
import { useState } from 'react';
import Gameplay from './Components/Gameplay';





function App() {

  const [isGameStarted, setIsGamepStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGamepStarted ((prev) => !prev )
  };

  return (
    <>
    {
      isGameStarted ? <Gameplay /> :  <Startgame toggle = {toggleGamePlay} />
    }
    

    </>
  )
}

export default App;



const Button = styled.button`
background-color: black;
color: white;
padding: 10px;

`