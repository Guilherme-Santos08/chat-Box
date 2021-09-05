import {
  MessageSentContainer,
  MessageReceivedContainer,
  MessageContainer,
} from "./styles.js";

export function MessageSent({ message, photoUser, name }) {
  return (
    <MessageContainer style={{ alignSelf: "flex-end" }}>
      <MessageSentContainer>
        <div>{message}</div>
      </MessageSentContainer>
      <div className="user">
        <img src={photoUser} alt="foto do usuario" />
        <span>{name}</span>
      </div>
    </MessageContainer>
  );
}

export function MessageReceived({ message }) {
  return (
    <MessageContainer style={{ alignSelf: "flex-start" }}>
      <MessageReceivedContainer>
        <div>{message}</div>
      </MessageReceivedContainer>
    </MessageContainer>
  );
}
