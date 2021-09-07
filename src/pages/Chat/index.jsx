import { MessageReceived } from "../../components/Messages";
import { MessageSent } from "../../components/Messages";
import { ChatBox } from "./styles";

import useAuth from "../../hooks/useAuth";
// import { MessageScrollBottom } from "../../components/MessageScrollBottom";
import { useEffect, useRef } from "react";

export function Chat({ name }) {
  const {
    user,
    signout,
    newMessage,
    setNewMessage,
    handleSendMessage,
    dateDatabese,
    setAmountMessage,
    amountMessage
  } = useAuth();

  const ref = useRef(null);
  useEffect(() => {
    if(dateDatabese) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dateDatabese]);
  
  const handleScroll = (e) => {
    const top = e.target.scrollTop === 0 ;
    if (top) { 
      setAmountMessage(amountMessage + 8)
      console.log(top)
    }
 }

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
          <div className="chat" ref={ref} onScroll={handleScroll}>
            {dateDatabese.map(
              (message, index) =>
                message.id === user.uid ? (
                  <MessageSent
                    key={index}
                    message={message.content}
                    name={message.name}
                    photoUser={message.avatar}
                  />
                ) : (
                  <MessageReceived
                    key={index}
                    message={message.content}
                    name={message.name}
                    photoUser={message.avatar}
                  />
                )
              // <MessageReceived key={index} />
            )}
          </div>
          <div className="write">
            <div className="input">
              <textarea
                onChange={(e) => setNewMessage(e.target.value)}
                onSubmit={handleSendMessage}
                value={newMessage}
                placeholder="Digite sua menssagem"
              />
            </div>
            <button type="submit" onClick={handleSendMessage}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </ChatBox>
  );
}
