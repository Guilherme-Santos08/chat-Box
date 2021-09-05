import { MessageReceived } from "../../components/Messages";
import { MessageSent } from "../../components/Messages";
import { ChatBox } from "./styles";

import useAuth from "../../hooks/useAuth";
import { MessageScrollBottom } from "../../components/MessageScrollBottom";

export function Chat({ name }) {
  const {
    user,
    signout,
    setNewMessage,
    newMessage,
    handleSendMessage,
    dateDatabese,
  } = useAuth();

  return (
    <ChatBox>
      <header>
        <span>Bem vindo(a) {user?.name}</span>
        <ul>
          <button onClick={() => signout()}>Deslogar</button>
        </ul>
      </header>

      <div className="container">
        <div className="">
          <div className="chat">
            <MessageReceived message="Veio" />
            <MessageSent message="Foi" />
          </div>
        </div>
      </div>
    </ChatBox>
  );
}
