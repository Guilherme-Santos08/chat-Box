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
    amountMessage,
  } = useAuth();

  const scrollRefDown = useRef(null);
  useEffect(() => {
    scrollRefDown.current.scrollTop = scrollRefDown.current.scrollHeight;
  }, []);

  const scrollRef = useRef(null);
  const handleScrollBottom = (e) => {
    const bottom = (e.target.scrollHeight =
      e.target.scrollTop === e.target.clientHeight);
    if (bottom) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return;
  };

  const handleScroll = (e) => {
    const top = e.target.scrollTop === 0;
    if (top) {
      setAmountMessage(amountMessage + 8);
      console.log(top);
      return e.target.scrollTop = 1;
    }
  };

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
          <div className="chat" ref={scrollRefDown} onScroll={handleScroll}>
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
            <div onScroll={handleScrollBottom}></div>
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
