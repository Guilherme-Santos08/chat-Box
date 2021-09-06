import styled from "styled-components";

export const MessageContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: flex-end; */
  position: relative;
  margin-top: 30px;

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: #000;
      font-weight: 500;
    }
    img {
      width: 35px;
      height: 35px;
      border-radius: 999px;
      margin-right: 8px;
    }
  }

  .user-sent {
    margin-left: 8px;
    span {
      position: absolute;
      top: -20px;
      right: 3.8rem;
    }
  }

  .user-received {
    margin-left: 8px;
    span {
      position: absolute;
      top: -20px;
      left: 3.8rem;
    }
  }
`;

export const MessageSentContainer = styled.div`
  background-color: #7e57c2;
  max-width: 286px;
  min-width: 186px;
  height: auto;

  padding: 7px;
  border-radius: 15px;
  position: relative;
  align-self: flex-end;
  &:after {
    /*Triangulo*/
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 32px solid transparent;
    border-right: -2px solid transparent; /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-top: 20px solid #7e57c2;
    bottom: -10px; /*localização. Experimente alterar para 'bottom'*/
    right: 4%;
  }
`;

export const MessageReceivedContainer = styled.div`
  background-color: #7e57c2;
  max-width: 286px;
  min-width: 186px;
  height: auto;

  padding: 7px;
  border-radius: 15px;
  position: relative;
  align-self: flex-start;

  &:after {
    /*Triangulo*/
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 0 solid transparent;
    border-right: 32px solid transparent;
    /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-top: 20px solid #7e57c2;
    bottom: -10px; /*localização. Experimente alterar para 'bottom'*/
    left: 4%;
  }
`;
