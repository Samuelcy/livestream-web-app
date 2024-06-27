import axios from "axios";
import User from '../../models/User.js'
import Channel from '../../models/Channel.js'

export const getChannels = async (_, res) => {
    try {
        const users = await User.find({}, {
            channel: 1,
            username: 1,
        }).populate("channel"); // Under the channel property, will have the channelSchema

        const requestData = await axios.get("http://localhost:8000/api/streams");

        const activeStreams = requestData.data;

        let liveStreams = [];

        for (const streamId in activeStreams?.live) {
            if (
                activeStreams.live[streamId].publisher &&
                activeStreams.live[streamId].publisher !== null
            ) {
                liveStreams.push(streamId);
            }
        }

        const channels = users
            .filter((u) => u.channel.isActive) // Fiiter for active channels
            .map((user) => {
                return {
                    id: user.channel._id,
                    title: user.channel.title,
                    avatarUrl: user.channel.avatarUrl,
                    username: user.username,
                    isOnline: liveStreams.includes(user.channel.streamKey), // If the livestream is on, then user is online
                };
            });

        return res.json({
            channels,
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send("Something went wrong");
    }
}