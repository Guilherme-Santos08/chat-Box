import styled from "styled-components";

export const ChatBox = styled.div`
  height: 100vh;

  header {
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
  }

  .container {
    margin: 30px 10px;
    padding: 0 0 20px;
    > div {
      max-width: 1100px;
      height: 600px;
      margin: 0 auto;
    }
    .chat {
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
