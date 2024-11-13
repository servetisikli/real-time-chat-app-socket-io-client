import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (username) {
      const socketUrl =
        import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";
      const newSocket = io(socketUrl, {
        transports: ["websocket"],
        query: { username },
      });
      setSocket(newSocket);

      newSocket.on("chatMessage", (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });

      return () => {
        if (newSocket) {
          newSocket.disconnect();
        }
      };
    }
  }, [username]);

  return (
    <SocketContext.Provider value={{ socket, username, setUsername, messages }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
