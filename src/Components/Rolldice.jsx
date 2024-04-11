import styled from "styled-components";


const Rolldice = ({roledice, currentDice}) => {
  

 

  return (
    <DiceContainer>
      <div className="dice" onClick={roledice}>
        {" "}
        <img src={`./image/Dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default Rolldice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
