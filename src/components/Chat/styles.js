import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100%;
  max-height: 100%;
  background-color: #eee;

  overflow-y: auto;

  padding: 18px 6px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 12px 12px 0 0;

  ::-webkit-scrollbar {
    width: 2px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #7e57c2;
    height: 20%;
  }

  article + article {
    margin-top: 35px;
  }
`;
