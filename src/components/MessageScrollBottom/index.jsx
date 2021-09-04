import { useEffect, useRef } from "react";

export const MessageScrollBottom = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messagesWrapper">
      {messages.map((message, index) => (
        <span key={index}>{message}</span>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};