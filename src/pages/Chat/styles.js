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
    /* width: 100%; */
    /* min-height: 50vh; */
    /* background-color: #fff; */
    /* max-width: 1100px */

    padding: 15px;
    margin: 30px 10px;

    > div {
      max-width: 1100px;
      margin: 0 auto;
      .chat {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;

        width: 100%;
        max-height: 100vh;
        background-color: #eee;

        padding: 18px;
        margin: 0 auto;
        border: 1px solid red;

        article + article {
          margin-top: 10px;
        }
      }
    }
  }
`;
