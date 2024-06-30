import Channel from "../../models/Channel.js";
import Message from "../../models/Message.js";

export const emitChatHistory = async (socket, channelId) => {
    try {
        const channel = await Channel.findById(channelId).populate('messages')
        console.log("Test 0")
        if (channel) {
            console.log("Test 1")

            return socket.emit("chat-history", {
                channelId,
                messages: channel.messages.map((m) => ({
                    author: m.author,
                    content: m.content,
                })),
            });
        }

        console.log(channelId);
        console.log("Test 2")

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
                data: new Data(),
            })

            await newMessage.save();

            // Message schema saves ID not msg object
            channel.messages.push(newMessage._id);
            
            await channel.save();
        }

        const newMessage = new Message({
            content: messageData.content,
            author: messageData.message.author
        })
    } catch (err) {
        console.log(err)

    }
}