import User from '../../models/User.js'
import Channel from '../../models/Channel.js'

export const getChannels = async (_, res) => {
    try {
        const users = await User.find({}, {
            channel: 1,
            username: 1,
        }).populate("channel"); // Under the channel property, will have the channelSchema

        const channels = users
            .filter(u => u.channel.isActive) // filter for active channels
            .map(user => {
                return {
                    id: user.channel._id,
                    title: user.channel.title,
                    avatarUrl: user.channel.avatarUrl,
                    username: user.username,
                    isOnline: false,
                }
            });

        return res.json({
            channels,
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send("Something went wrong");
    }
}