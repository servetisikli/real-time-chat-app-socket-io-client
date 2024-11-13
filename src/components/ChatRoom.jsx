import React, { useContext, useEffect, useRef } from "react";
import { SocketContext } from "../contexts/SocketContext";
import MessageInput from "./MessageInput";

const colors = [
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-pink-100",
  "bg-purple-100",
  "bg-red-100",
  "bg-indigo-100",
];

const getRandomColor = (username) => {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
};

const ChatRoom = () => {
  const { messages } = useContext(SocketContext);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 py-4">
      <div className="flex flex-col flex-grow overflow-y-auto p-4 bg-white shadow-md w-full max-w-6xl mx-auto mb-8 rounded-md sm:rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
          Real-Time Chat
        </h2>
        <ul className="flex-grow overflow-y-auto mb-4 space-y-2">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`p-2 rounded border border-gray-200 ${getRandomColor(
                msg.username
              )}`}
            >
              <span className="font-bold block text-sm sm:text-base mb-1">
                {msg.username}:
              </span>
              <span className="block text-xs sm:text-sm md:text-base">
                {msg.message}
              </span>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatRoom;
