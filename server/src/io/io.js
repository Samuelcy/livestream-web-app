import { Server } from "socket.io"

let io;

export const registerSocketServer = (server) => {
    io = new Server(server, {
        cors: {
            origin: '*',
            methods: ["GET", "POST"],
        }
    });

    io.on("connection", (socket) => {
        console.log("New user connected");
        console.log(socket.id);

        socket.on('chat-histry', (channelId) => {
            emitChatHistory(socket, channelId);
        })
    });
}