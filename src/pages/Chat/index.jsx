import useAuth from "../../hooks/useAuth";
<<<<<<< HEAD
import { useEffect, useRef } from "react";
=======
>>>>>>> development

import { Header } from "../../components/Header";
import { ChatMessages } from "../../components/Chat";

import { ChatBox } from "./styles";

export function Chat() {
  const { newMessage, setNewMessage, handleSendMessage } = useAuth();

  return (
    <ChatBox>
      <Header />
      <div className="container">
        <div className="">
          <ChatMessages />
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
