import { followChannel as followChannelRequest } from "../../api";
import toast from "react-hot-toast"

export const useFollowChannel = () => {
    const followChannel = async (channelId, onSuccess) => {
        const responseData = await followChannelRequest(channelId)

        if (responseData.error) {
            return toast.error(
                responseData.exception?.response?.data || "Error occured when following channel."
            )
        }

        toast.success("Channel followed sucessfully.");


        /**Execute getChannels to appear on following (side bar) list: Dashboard>Content>ChannelView>ChannelDescription>FollowButton. 
         * useChannels state will change, which will then go to the Dashboard page, so then sidebar will have new channels
         * Passing in true to onSucess because we know the user is logged in for getChannels to execute */
        onSuccess(true);
    }

    return {
        followChannel,
    }
}