import styled from "styled-components";

export const LoginScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  button {
    width: 200px;
    padding: 10px 0;
    border-radius: 8px;

    background-color: #B6B9D9;
    border: 2px solid black;
    cursor: pointer;
    transition: opacity .2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;
