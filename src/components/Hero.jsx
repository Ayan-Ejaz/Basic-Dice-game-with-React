import React, {useState} from 'react'
import styled from 'styled-components';
import {default as Heroimg} from '../assets/Heroimg.png';
import {default as Game} from './Game';
import {default as Button} from './Button';


const Container = styled.div`
    display: flex;
    align-items: center;
    height: 550px;
    width: 1100px;
    margin: 7px auto;
`

const Content = styled.div`
    width: 528px;
    height: 188px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;

    h1 {
        font-size: 65px;
        margin-bottom: -14px;
    }
`



const Hero = () => {
  const [showComponent, setShowComponent] = useState(false);

  function handleChange() {
    setShowComponent((prev) => !prev);
  }

  return (

    showComponent ? (
        <Game/>
    )
    :
    (
    <>
        <Container>
            <div>
                <img src = {Heroimg}/>
            </div>
            <Content>
                <h1>DICE GAME</h1>
                <Button onClick = {handleChange}>Play Now</Button>
            </Content>

        </Container>
        </>
    )
  )
}

export default Hero
