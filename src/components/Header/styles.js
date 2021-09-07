import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
  padding: 30px;
  background-color: #333456;

  /* position: ; */
  /* right: 0; */
  /* left: 0; */
  /* z-index: 999; */
  span {
    font-size: 1.5rem;
    font-weight: bold;
    cursor: default;
  }

  button {
    width: 150px;
    padding: 10px 0;
    background-color: #f4abc4;

    border-radius: 8px;
    border: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;
