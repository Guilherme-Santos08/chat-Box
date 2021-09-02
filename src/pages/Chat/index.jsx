import { MessageReceived } from "../../components/MessageReceived";
import { MessageSent } from "../../components/MessageSent";
import { ChatBox } from "./styles";

import useAuth from "../../hooks/useAuth";

export function Chat({ name }) {
  const { user, signout } = useAuth();
  console.log(user);

  return (
    <ChatBox>
      <header>
        <span>Bem vindo(a) {user?.name}</span>
        <ul>
          <button onClick={() => signout()}>Deslogar</button>
        </ul>
      </header>
      <div className="teste">
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
      </div>
    </ChatBox>
  );
}
