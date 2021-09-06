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
      <div className="user user-sent">
        <img src={photoUser} alt="foto do usuario" />
        <span>{name}</span>
      </div>
    </MessageContainer>
  );
}
export function MessageReceived({ message, photoUser, name }) {
  return (
    <MessageContainer style={{ alignSelf: "flex-start" }} className="teste">
      <div className="user user-received">
        <img src={photoUser} alt="foto do usuario" />
        <span>{name}</span>
      </div>
      <MessageReceivedContainer>
        <div>{message}</div>
      </MessageReceivedContainer>
    </MessageContainer>
  );
}
