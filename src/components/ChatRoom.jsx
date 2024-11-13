import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";
import MessageInput from "./MessageInput";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      socket.on("chatMessage", (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    }
  }, [socket]);

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
