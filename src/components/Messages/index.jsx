import {
  MessageSentContainer,
  MessageReceivedContainer,
  MessageContainer,
} from "./styles.js";

export function MessageSent({ message }) {
  return (
    <MessageContainer style={{alignSelf: "flex-end"}}>
      <MessageSentContainer>
        <div>{message}</div>
      </MessageSentContainer>
    </MessageContainer>
  );
}

export function MessageReceived({ message }) {
  return (
    <MessageContainer style={{alignSelf: "flex-start"}}>
      <MessageReceivedContainer>
        <div>{message}</div>
      </MessageReceivedContainer>
    </MessageContainer>
  );
}
