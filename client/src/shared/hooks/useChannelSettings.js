import { useState, useEffect } from "react";
import { getChannelSettings, updateChannelSettings } from "../../api";
import toast from "react-hot-toast"

export const useChannelSettings = () => {
    const [channelSettings, setChannelSettings] = useState(null);

    const fetchChannelSettings = async () => {
        const response = await getChannelSettings()

        if (response.error) {
            return toast.error(
                response.exception?.response?.data || "Error occured when fetching channel settings."
            )
        }

        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey
        })
    }

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data);

        if (response.error) {
            return toast.error(
                response.exception?.response?.data || "Error occured when fetching channel settings."
            )
        }

        toast.success("Channel settings saved sucessfully");
    }

    // Executed only once. After component rendered, useEffect
    useEffect(() => {
        fetchChannelSettings()
    }, [])

    return {
        isFetching: !channelSettings,
        channelSettings,
        saveSettings,
    }
}