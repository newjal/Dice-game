
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>
        How to play Dice Game
      </h2>
      <div className="text">
        <p>Select any number </p>
        <p>Click on the dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point will be deducted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #FBF1F1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;

h2{
    font-size: 24px;
}
.text{
    margin-top: 24px;
}
`;