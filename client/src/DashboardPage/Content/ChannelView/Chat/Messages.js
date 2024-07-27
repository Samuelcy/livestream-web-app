import React from "react";
import { Box, Typography } from "@mui/material";

const Message = ({ author, content }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 1 }}>
                {author}:
            </Typography>
            <Typography variant="body1">
                {content}
            </Typography>
        </Box>
    );
};

export const Messages = ({ messages }) => {
    return (
        <Box sx={{ padding: 2, backgroundColor: 'background.paper', borderRadius: 1, boxShadow: 1, maxHeight: '350px', overflowY: 'auto' }}>
            {messages.map((message) => (
                <Message
                    key={`${message.author}-${message.content}-${message.date}`}
                    author={message.author}
                    content={message.content}
                />
            ))}
        </Box>
    );
};