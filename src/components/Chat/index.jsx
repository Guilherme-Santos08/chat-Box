import { useEffect, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import ScrollableFeed from "react-scrollable-feed";

import { MessageReceived, MessageSent } from "../../components/Messages";
import { ChatContainer } from "./styles.js";

export function ChatMessages() {
  const { user, dateDatabese, setAmountMessage, amountMessage } = useAuth();

  const scrollRefDown = useRef(null);
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
      return (e.target.scrollTop = 100);
    }
  };

  useEffect(() => {
    scrollRefDown.current.scrollTop = scrollRefDown.current.scrollHeight;
  }, []);

  return (
    <ChatContainer ref={scrollRefDown} onScroll={handleScroll}>
      <ScrollableFeed>
        {dateDatabese.map((message, index) =>
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
        )}
      </ScrollableFeed>
      <div onScroll={handleScrollBottom}></div>
    </ChatContainer>
  );
}
