import React, { useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";
import MessageInput from "./MessageInput";

const ChatRoom = () => {
  const { messages } = useContext(SocketContext);

  return (
    <div>
      <h2>Real-Time Chat</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg.username}: {msg.message}
          </li>
        ))}
      </ul>
      <MessageInput />
    </div>
  );
};

export default ChatRoom;
