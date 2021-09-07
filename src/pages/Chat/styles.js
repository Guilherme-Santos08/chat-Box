import styled from "styled-components";

export const ChatBox = styled.div`
  height: 100vh;
  
  .container {
    margin: 30px 10px;
    padding: 0 0 20px;
    > div {
      max-width: 1100px;
      height: 600px;
      margin: 0 auto;
    }
    .write {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px 8px 8px 12px;
      background-color: #333456;
      max-width: 100%;
      margin-top: 3px;

      .input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        textarea {
          resize: none; /* impede que o próprio usuário altere o tamanho do textarea */
          min-width: 100%;
          height: auto;
          padding: 10px;
          font-size: 0.8rem;
          border: 1px solid black;
          border-radius: 12px 0 0 12px;
          overflow-y: auto;
          border: none;
          outline: none;
        }
      }
      button {
        width: 100px;
        padding: 10px 0;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        margin: 0 5px;
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      > div {
        height: 430px;
      }
    }
  }
`;
