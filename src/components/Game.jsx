import React, {useState} from 'react'
import styled from 'styled-components';
import {default as Button} from './Button';
import {dice_1, dice_2, dice_3, dice_4, dice_5,dice_6} from '../assets';

const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

const Navigation = styled.div`
  width: 1124px;
  height: 110px;
  margin: 4px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Score = styled.div`
  width: 151px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 44px;
  }
`
const Buttons = styled.div`
  width: 552px;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

const Container = styled.div`
  height: 356px;
  width: 552px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const Content = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 100px;
    height: 94px;
  }
`

const Rules = styled.div`
  width: 430px;
  height: 100px;
  background: lightblue;
  margin: auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 15px;
    margin: auto;
  }

  ul {
    list-style: none;
  }

  ul li {
    font-size: 12px;
    font-weight: 600;
  }
`

const Game = () => {

  const arr = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  const [randomNumber, setRandomNumber] = useState(1);
  const [userScore, setUserScore] = useState(0);
  const [msg, setMsg] = useState();
  const [rules, SetRules] = useState(false);

  function generateRandomNumber(min, max) {

    if (!selectedNumber) {
      setMsg("No number selected");
      return;
    }
    else {
      setMsg("");
      setSelectedNumber(undefined);
    }

    const num = Math.floor(Math.random() * (max - min) + min);
    setRandomNumber(num);



    if (selectedNumber === randomNumber)
    {
        setUserScore(selectedNumber + userScore);
    }
    else 
    {
      setUserScore(userScore - selectedNumber);
    }
  }

  function handleChange(item) {
    setSelectedNumber(item);
  }

  function handleResetScore() {
    setRandomNumber(1);
    setUserScore(0);
  }

  function handleRules() {
    SetRules((prev) => !prev);
  }
  return (

    <>
      <Navigation>
          <Score>
              <h1>{userScore}</h1>
              <p>Total score</p>
          </Score>

          <Buttons>

              {
          arr.map((item, index) => (
            <Button key={index}
            className={`TopButtons ${selectedNumber === item ? 'selected' : ''}`}
            onClick = {() => handleChange(item)}>
              {item}
            </Button>
          ))
        }     
          { !selectedNumber && <div><p>Select any number</p></div>}
          
          </Buttons>
      </Navigation>

      <Container>
            <Content>
              <p>{msg}</p>
              <img src = {diceImages[randomNumber - 1]} onClick = {() => generateRandomNumber(1, 7)}/>
              <p>Click on dice to Roll</p>
              <Button className = "Gamebuttons" onClick = {handleResetScore}>Reset Score</Button>
              <Button className = "Gamebuttons" onClick = {handleRules}>Show Rules</Button>
            </Content>
      </Container>
      
      {
        rules && 
        <Rules>
        <h1>Rules for Playing this game</h1>
        <ul>
          <li>Select any number</li>
          <li>Click on dice to roll</li>
          <li>If the selected number matches with dice, you get that many points</li>
          <li>If the selected number doesnot match, that many points are detected</li>
        </ul>
      </Rules>
      }
      
    </>
  )
}

export default Game
