import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.div`
    width: 200px;
    height: 35px;
    border: 2px solid lightcoral;
    background: black;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    transition: 0.5s background ease-in;

    &:hover {
        background: white;
        color: black;
        transition: 0.3s background ease-in;
    }

    &.TopButtons {
        height: 50px;
        width: 50px;
        font-size: 15px;
        background: white;
        color: black;

        &:hover{
            background: black;
            color: white;
        }
    }

    &.selected {
        background: black;
        color: white;
    }

    &.Gamebuttons{
        width: 163px;
        height: 31px;
        font-size: 12px;
        padding: 12px;
    }
`;


const Button = ({children, onClick, className}) => {
  return (
    <StyledButton onClick = {onClick} className = {className}>
            {children}
    </StyledButton>
  )
}

export default Button
