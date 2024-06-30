import { useEffect } from "react";
import { getChatHistory, sendChatMessage } from "../../socketConn";
import { useUserDetails } from "./useUserDetails";
import { closeChatSubscription } from "../../socketConn/socketConn";

export const useChatHistory = (channelId) => {
    const { isLogged, username } = useUserDetails();

    useEffect(() => {
        getChatHistory(channelId);
        // When the component is unmounted (not looking at channel), close the chat
        return () => {
            closeChatSubscription(channelId)
        }
    }, [])
    // console.log("Emitting to hook to socketConn client");

    const sendMessage = (message) => {
        sendChatMessage(channelId, {
            author: isLogged ? username : 'Guest',
            content: message,
        })
    }

    return {
        messages: [],
        sendMessage,
    }
}