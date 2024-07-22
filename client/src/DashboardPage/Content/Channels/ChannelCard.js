import React from 'react';
import { Box, Typography } from "@mui/material";

const imageUrl = 'https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs='

const ChannelAvatar = ({ url }) => {
    return (
        <div className="channels-avatar-container">
            <img className="avatar-image" src={url || imageUrl} alt="Channel Avatar" />
        </div>
    );
};

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler,
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id);
    };

    return (
        <Box
            className="channels-card"
            onClick={handleNavigate}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'background.paper',
                p: 1,
                boxShadow: 1,
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: 'secondary.main',
                },
            }}
        >
            <ChannelAvatar url={avatarUrl} />
            <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {username}
                </Typography>
                <Typography variant="body2" sx={{ color: isOnline ? "green" : "red" }}>
                    {isOnline ? "Online" : "Offline"}
                </Typography>
            </Box>
        </Box>
    );
};