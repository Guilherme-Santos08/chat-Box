import styled from "styled-components";

export const MessageContainer = styled.article`
  font-family: "open sans";
  font-size: 0.85em;
  line-height: 1.6em;
  color: #fff;

  background-color: #7e57c2;
  max-width: 286px;
  min-width: 186px;
  height: auto;

  padding: 7px;
  border-radius: 15px;
  position: relative;
`;

export const MessageSentContainer = styled.div`
  align-self: flex-end;
  &:after {
    /*Triangulo*/
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 29px solid transparent;
    border-right: 6px solid transparent;
    /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-top: 20px solid #7e57c2;
    bottom: -18px; /*localização. Experimente alterar para 'bottom'*/
    right: 4%;
  }
`;

export const MessageReceivedContainer = styled.div`
  align-self: flex-start;

  &:after {
    /*Triangulo*/
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 6px solid transparent;
    border-right: 29px solid transparent;
    /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-top: 20px solid #7e57c2;
    bottom: -18px; /*localização. Experimente alterar para 'bottom'*/
    left: 4%;
  }
`;
