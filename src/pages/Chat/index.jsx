import { MessageReceived } from "../../components/MessageReceived";
import { MessageSent } from "../../components/MessageSent";
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
      <div className="teste">
        <div className="chat">
          <h2>Dz ChatBox</h2>
          <div className="messages">
            <MessageScrollBottom
              messages={dateDatabese.map(
                (message, index) =>
                  message.id === user.uid ? (
                    <MessageSent key={index} message={message.content} />
                  ) : (
                    <MessageReceived key={index} message={message.content} />
                  )
                // <MessageReceived key={index} />
              )}
            />
          </div>
          <div className="input">
            <textarea
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
              placeholder="Digite sua menssagem"
            />
            <button onClick={handleSendMessage}>Enviar Menssagem</button>
          </div>
        </div>
      </div>
    </ChatBox>
  );
}
