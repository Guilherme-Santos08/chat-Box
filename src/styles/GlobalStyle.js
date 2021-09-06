import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    /* padding: 0 10px; */
    background-color: #060930;
  }
`;
