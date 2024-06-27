import { followChannel as followChannelRequest } from "../../api";
import toast from "react-hot-toast"

export const useFollowChannel = () => {
    const followChannel = async (channelId) => {
        const responseData = await followChannelRequest(channelId)

        if (responseData.error) {
            return toast.error(
                responseData.exception?.response?.data || "Error occured when following channel."
            )
        }

        toast.success("Channel followed sucessfully.");
    }

    return {
        followChannel,
    }
}