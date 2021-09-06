import styled from "styled-components";

export const MessageContainer = styled.div`
  font-family: "open sans";
  font-size: 0.85em;
  line-height: 1.6em;
  color: #fff;

  background-color: #7e57c2;
  max-width: 286px;
  min-width: 186px;
  height: auto;

  padding: 7px;
  align-self: flex-start;

  border-radius: 15px;
  position: relative;

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
