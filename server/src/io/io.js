import { Server } from "socket.io"
import { emitChatHistory, emitChatMessage } from "./events/chatHistory.js"

let io;

export const registerSocketServer = (server) => {
    io = new Server(server, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"],
        }
    });

    // Socket is the connection object between client and server
    io.on("connection", (socket) => {
        console.log("New user connected");
        console.log(socket.id);

        // After connection with client, listen for chat-history event from client
        socket.on('chat-history', (channelId) => {
            emitChatHistory(socket, channelId);
            // console.log("Emitting chat-history received from client, sending to emitChatHistory");
        })

        // Receive data from the client
        socket.on('chat-message', (data) => {
            emitChatMessage(io, { toChannel: data.toChannel, message: data.message});
        })
    });
}