import React from "react";
import { ChannelCard } from "./ChannelCard";
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export const Channels = ({ channels }) => {
    const navigate = useNavigate();

    const handleNavigateToChannel = (id) => {
        navigate(`/channel/${id}`);
    }

    return (
        <Box className="channels-container" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {channels.map(channel => (
                <ChannelCard
                    key={channel.id}
                    id={channel.id}
                    title={channel.title}
                    username={channel.username}
                    isOnline={channel.isOnline}
                    avatarUrl={channel.avatarUrl}
                    navigateToChannelHandler={handleNavigateToChannel}
                />
            ))}
        </Box>
    );
};