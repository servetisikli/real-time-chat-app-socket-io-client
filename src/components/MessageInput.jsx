import React, { useState, useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { socket, username } = useContext(SocketContext);

  const sendMessage = () => {
    socket.emit("chatMessage", { username, message });
    setMessage("");
  };

  return (
    <div className="flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="flex-grow p-2 border border-gray-300 rounded-l"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;