import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useUserDetails, useFollowChannel } from "../../../shared/hooks";

const FollowButton = ({ channelId, getChannels }) => {
    const { followChannel } = useFollowChannel();

    const handleFollowChannel = () => {
        followChannel(channelId, getChannels);
    };

    return (
        <Button variant="contained" color="primary" onClick={handleFollowChannel}>
            Follow
        </Button>
    );
};

export const ChannelDescription = ({
    username,
    title,
    description,
    channelId,
    getChannels
}) => {

    const { isLogged } = useUserDetails();

    return (
        <Box sx={{ padding: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {username}
                </Typography>
                {isLogged && (
                    <FollowButton channelId={channelId} getChannels={getChannels} />
                )}
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography variant="subtitle1" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" component="div" sx={{ mt: 1 }}>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};