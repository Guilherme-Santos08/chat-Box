import styled from "styled-components";

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: white;
    padding: 30px;
    background-color: #333456;

    position: fixed;
    right: 0;
    left: 0;
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
  }

  .teste {
    font-size: 30px;
    width: 100%;
    margin-top: 130px;

    display: flex;
    align-items: center;
    justify-content: center;

    .chat {
      min-width: 300px;
      width: 500px;
      height: 554px;

      background-color: #595b83;
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
  }
`;
