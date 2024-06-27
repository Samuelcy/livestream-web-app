import {useState} from "react";
import { getChannelDetails as getChannelDetailsRequest } from "../../api"
import toast from "react-hot-toast"

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState(null);

    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetailsRequest(id);

        if (responseData.error) {
            return toast.error(
                responseData.exception?.response?.data || "Error occured when fetching channel details."
            );
        }

        setChannelDetails(responseData.data);
    }

    // Fetch when channel details are not set
    return {
        channelDetails, isFetching: !channelDetails, getChannelDetails,
    }
} 