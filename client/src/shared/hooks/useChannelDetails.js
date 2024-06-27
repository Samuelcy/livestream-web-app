export { getChannelDetails as getChannelDetailsRequest } from "../../api"

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState(null);

    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetailsRequest(id);

        if (responseData.error) {
            return toast.error(
                responseData.exception?.response?.data || "Error occured when fetching channel details."
            );
        }

        setChannelDetails(response.data);
    }

    // Fetch when channel details are not set
    return {
        channelDetails, isFetching: !channelDetails, getChannelDetails,
    }
} 