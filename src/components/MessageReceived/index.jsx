import { MessageContainer } from "./styles";

export function MessageReceived({ message }) {
  return (
    <MessageContainer>
      <div>{message}</div>
    </MessageContainer>
  );
}
