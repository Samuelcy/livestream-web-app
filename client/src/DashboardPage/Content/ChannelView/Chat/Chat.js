import React from "react";
import { Messages } from "./Messages";
import { NewMessageInput } from "./NewMessageInput";
import { useChatHistory } from "../../../../shared/hooks";
import { Box, Typography } from "@mui/material";

export const Chat = ({ channelId }) => {
    const { sendMessage, messages } = useChatHistory(channelId);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>
                <Typography variant="h6" component="span">
                    Stream Chat
                </Typography>
            </Box>
            <Box sx={{ flex: 1, overflowY: 'auto', bgcolor: 'background.paper' }}>
                <Messages messages={messages} />
            </Box>
            <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                <NewMessageInput sendMessage={sendMessage} />
            </Box>
        </Box>
    );
};