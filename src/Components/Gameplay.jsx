import styled from "styled-components";
import NumberSelecter from "./NumberSelecter";
import TotalScore from "./TotalScore";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, OutLineButton } from "../Styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roledice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number')
return;
    } 


    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelecter
        error = {error}
        setError = {setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Rolldice currentDice={currentDice} roledice={roledice} />
      <div className="btns">
        <OutLineButton onClick={resetScore}>Reset</OutLineButton>

        <Button
        onClick={() => setShowRules((prev) => !prev)}> {showRules ? "Hide" : "Show"}

          Rules </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    gap: 10px;

  }
`;
