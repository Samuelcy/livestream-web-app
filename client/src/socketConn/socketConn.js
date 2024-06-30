import io from 'socket.io-client'

let socket;

export const connectWithSocketServer = () => {
    socket = io('http://localhost:5002')

    socket.on("connect", () => {
        console.log("Sucessfully connected to socket.io server");
        console.log(socket.id);
    })

    // Event listener for chat history hook
    socket.on('chat-history', (chatHistory) => {
        console.log(chatHistory);
        // console.log('Chat history from the server')
    })
}

// Emit from the client to the server
export const getChatHistory = (channelId) => {
    socket.emit("chat-history", channelId);
    // console.log("Emitting chat history to the server");
}

export const sendChatMessage = (toChannel, message) => {
    socket.emit('chat-message', {
        toChannel,
        message,
    });
}