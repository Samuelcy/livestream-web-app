import { useState, useEffect } from "react";
import { getFollowedChannels, getChannels as getChannelsRequest } from "../../api";
import toast from "react-hot-toast"

export const useChannels = () => {
    const [channels, setChannels] = useState(null);

    // If the user is logged, the JWT is attached to the request giving the followed channels
    const getChannels = async (isLogged = false) => {
        const channelsData = await getChannelsRequest();

        if (channelsData.error) {
            return toast.error(
                channelsData.exception?.response?.data || "Error occured when fetching channel."
            );
        }

        // User not logged in
        if (!isLogged) {
            return setChannels({
                channels: channelsData.data.channels,
            })
        }

        const followedChannelsData = await getFollowedChannels();

        if (channelsData.error) {
            return toast.error(
                channelsData.exception?.response?.data || "Error occured when fetching the followed channels."
            );
        }

        setChannels({
            channels: channelsData.data.channels,
            // Render data for followed channels
            followedChannelsData: channelsData.data.channels.filter((channel) =>
                followedChannelsData.data.followedChannels.includes(channel.id)),
        })
    };

    useEffect(() => {
        console.log(channels);
    }, [channels]);

    return {
        getChannels,
    }
};