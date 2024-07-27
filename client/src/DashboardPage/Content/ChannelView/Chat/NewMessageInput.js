import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

export const NewMessageInput = ({ sendMessage }) => {
    const [messageContent, setMessageContent] = useState("");

    const handleValueChange = (e) => {
        setMessageContent(e.target.value);
    };

    const handleSendMessage = () => {
        // Send message to the server
        if (messageContent.length > 0) {
            sendMessage(messageContent);
        }
        // Rests input value after sending message
        setMessageContent("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="Type message..."
                value={messageContent}
                onChange={handleValueChange}
                onKeyDown={handleKeyPress}
                sx={{ bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}
            />
        </Box>
    );
};