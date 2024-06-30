import { useEffect } from "react";
import { getChatHistory } from "../../socketConn";

export const useChatHistory = (channelId) => {
    useEffect(() => {
        getChatHistory(channelId);
    }, [])
    // console.log("Emitting to hook to socketConn client");

    return {
        messages: [],
        sendMessage: () => {},
    }
}