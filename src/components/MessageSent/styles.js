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
  align-self: flex-end;

  border-radius: 15px;
  position: relative;

  &:after {
    /*Triangulo*/
    content: "";
    width: 0;
    height: 0;
    position: absolute;

    border-left: 29px solid transparent;
    border-right: 6px solid transparent;
    border-top: 20px solid #7e57c2;
    bottom: -18px;
    right: 4%;
  }
`;
