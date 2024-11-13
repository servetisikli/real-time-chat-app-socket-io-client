import React, { useContext, useState } from "react";
import ChatRoom from "./components/ChatRoom";
import { SocketContext } from "./contexts/SocketContext";

const App = () => {
  const { username, setUsername } = useContext(SocketContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Enter your username</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <button onClick={handleLogin}>Join Chat</button>
        </div>
      ) : (
        <ChatRoom />
      )}
    </div>
  );
};

export default App;
