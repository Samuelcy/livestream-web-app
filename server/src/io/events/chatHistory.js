import Channel from "../../models/Channel.js";
import Message from "../../models/Message.js";

export const emitChatHistory = async (socket, channelId) => {
    try {
        const channel = await Channel.findById(channelId).populate('messages')
        if (channel) {
            return socket.emit("chat-history", {
                channelId,
                messages: channel.messages.map((m) => ({
                    author: m.author,
                    content: m.content,
                })),
            });
        }

        console.log(channelId);

        // Response sent back to client
        socket.emit('chat-history', {
            errorOccured: true,
        });

    } catch (err) {
        console.log(err)
        // emit to the client
        socket.emit('chat-history', {
            errorOccured: true,
        })
    }
}

export const emitChatMessage = async (io, messageData) => {
    try {
        const channel = await Channel.findById(messageData.toChannel);

        if (channel) {
            const newMessage = new Message({
                content: messageData.message.content,
                author: messageData.message.author,
                date: new Date(),
            });

            await newMessage.save();

            // Message schema saves ID not msg object
            channel.messages.push(newMessage._id);

            await channel.save();

            // Shares message to other userss
            io.to(messageData.toChannel).emit("chat-message", newMessage)
        }
    } catch (err) {
        console.log(err)

    }
}