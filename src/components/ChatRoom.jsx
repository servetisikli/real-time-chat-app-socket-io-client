import React, { useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";
import MessageInput from "./MessageInput";

const ChatRoom = () => {
  const { messages } = useContext(SocketContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Real-Time Chat</h2>
        <ul className="mb-4">
          {messages.map((msg, index) => (
            <li key={index} className="mb-2">
              <span className="font-bold">{msg.username}:</span> {msg.message}
            </li>
          ))}
        </ul>
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatRoom;