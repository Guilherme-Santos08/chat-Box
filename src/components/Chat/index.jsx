import { MessageReceived } from "../MessageReceived";
import { MessageSent } from "../MessageSent";
import { ChatBox } from "./styles";

export function Chat() {
  return (
    <ChatBox>
      <div className="chat">
        <h2>Dz ChatBox</h2>
        <div className="messages">
          <MessageReceived />
          <MessageSent />
          <MessageSent />
          <MessageSent />
          <MessageSent />
        </div>
        <div className="input">
            <textarea type="text" placeholder="Digite sua menssagem" required />
          </div>
      </div>
    </ChatBox>
  );
}
