import styled from "styled-components";

export const ChatBox = styled.div`
  font-size: 30px;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .chat {
    min-width: 300px;
    width: 500px;
    height: 554px;

    background-color: blueviolet;
    border-radius: 12px;
    position: relative;

    h2 {
      font-size: 2rem;
      color: #fff;
      padding: 20px 24px;
    }

    .messages {
      /* display: flex;
      flex-direction: column;
      justify-content: center; */
      width: 90%;
      height: 74%;
      margin: auto;
      border-radius: 12px;
      background-color: #eee;
      padding: 20px 15px;
      position: relative;
      overflow-y: auto !important;

      .talk {
        height: 100%;
        overflow-y: auto !important;
        div:last-child {
          margin-bottom: 100px;
        }
      }
    }

    .input {
      bottom: 1rem;
      right: 1rem;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0px 24px;

      textarea {
        resize: none; /* impede que o próprio usuário altere o tamanho do textarea */
        width: 200px;
        height: 50px;
        padding: 10px;
        font-size: 0.8rem;

        border: 1px solid black;
        border-radius: 8px;
        overflow-y: auto;
        outline: none;
      }
    }
  }
`;
