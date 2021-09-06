import { MessageContainer } from "./styles";

export function MessageSent({ message }) {
  return (
    <MessageContainer>
      <div>{message}</div>
    </MessageContainer>
  );
}
