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
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
