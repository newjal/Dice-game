 
 import styled from "styled-components";

 
 
  export const Button = styled.button` 
    
    padding: 10px 18px;
    color: white;
    min-width: 220px;
    border: none;
    background: #000000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
     transition: 0.4s background ease-in;

    &:hover{
        background-color: #ffffff;
        color: #090909;
        border: 1px solid black;
        transition: 0.5s background ease-in;
    }

    `; 

    export const OutLineButton = styled(Button)`
    
      background-color: white;
      border: 1px solid black;
      color: black;

      &:hover {
        background-color: black;
        border: 1px solid black;
        color: white;
      }
    `;