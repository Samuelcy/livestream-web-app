import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export const Sidebar = ({ channels }) => {
    // Returns empty sidebar if user isn't following channesl
    if (!channels) {
        return null;
    }

    return (
        <Box sx={{ height: '100vh', backgroundColor: 'background.paper', color: 'text.primary' }}>
            <Typography sx={{ paddingTop: 10, paddingLeft: 2 }} variant="h6" gutterBottom>
                For you
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Typography sx={{ paddingLeft: 2 }} variant="h6" gutterBottom>
                FOLLOWED CHANNELS
            </Typography>
            {channels.map((channel) => (
                <Box key={channel.id} sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                    <Typography variant="body1">
                        {channel.username}
                    </Typography>
                    <Typography variant="body1" sx={{ color: channel.isOnline ? 'green' : 'red' }}>
                        {channel.isOnline ? "Online" : "Offline"}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};