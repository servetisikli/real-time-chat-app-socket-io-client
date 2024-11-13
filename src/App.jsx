import React from "react";
import SocketProvider from "./contexts/SocketContext";
import ChatRoom from "./components/ChatRoom";

const App = () => {
  return (
    <SocketProvider>
      <ChatRoom />
    </SocketProvider>
  );
};

export default App;
