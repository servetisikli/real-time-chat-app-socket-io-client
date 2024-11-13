# Express Chat Application

This is a real-time chat application built with Express, Socket.io, and MongoDB. It allows users to send and receive messages in real-time.


## Web Page

You can access the web page for the chat application at the following URL:

[Chat Application Web Page](https://real-time-chat-app-socket-io-client.onrender.com)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/servetisikli/real-time-chat-app-socket-io-client.git
    cd real-time-chat-app-socket-io-client
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    MONGODB_URI=your_mongodb_uri
    PORT=5000
    CLIENT_URL=http://localhost:5173
    ```

4. Start the server:
    ```sh
    npm start
    ```

## Usage

1. Start the server as described in the [Installation](#installation) section.
2. Open your client application and connect to the server.

## API Endpoints

- `GET /api/chat/messages` - Retrieve all chat messages.
- `POST /api/chat/message` - Send a new chat message.

## Environment Variables

- `MONGODB_URI`: The URI of your MongoDB database.
- `PORT`: The port on which the server will run (default is 5000).
- `CLIENT_URL`: The URL of the client application.
