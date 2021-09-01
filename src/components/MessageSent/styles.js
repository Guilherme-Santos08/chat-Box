import styled from "styled-components";

export const MessageContainer = styled.div`
  font-family: "open sans";
  font-size: 0.85em;
  line-height: 1.6em;
  color: #fff;

  background: #7e57c2;
  max-width: 286px;
  height: auto;

  margin-left: 125px;
  padding: 7px;
  margin-top: 19px;

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
