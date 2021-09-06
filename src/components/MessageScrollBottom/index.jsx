import { useEffect, useRef } from "react";

export const MessageScrollBottom = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  
  const ref = useRef(null)
  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  }, [messages])

  return (
    <div className="messagesWrapper">
      {messages.map((message, index) => (
        <article key={index}>{message}</article>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};