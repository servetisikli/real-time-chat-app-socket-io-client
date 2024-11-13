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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Enter your username</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Join Chat
          </button>
        </div>
      ) : (
        <ChatRoom />
      )}
    </div>
  );
};

export default App;