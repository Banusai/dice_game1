import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RoleDice = ({ rollDice, currentDice }) => {
  console.log(`Rendering dice with number: ${currentDice}`); // Debugging

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={`/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
          onError={(e) => (e.target.src = '/dice_1.png')} // Fallback to dice_1.png
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

RoleDice.propTypes = {
  rollDice: PropTypes.func.isRequired,
  currentDice: PropTypes.number.isRequired,
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  img {
    width: 100px;
    height: 100px;
  }

  p {
    font-size: 24px;
  }
`;
