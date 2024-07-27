import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails } from "../../../shared/hooks";
import { LoadingSpinner } from "../../../shared/components";
import { Box, Typography } from "@mui/material";

export const Stream = ({ streamUrl }) => {
    return (
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
            <ReactFlvPlayer width="100%" height="100%" url={streamUrl} />
        </Box>
    );
};

export const ChannelView = ({ getChannels }) => {
    const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();

    // id from url
    const { id } = useParams();

    useEffect(() => {
        getChannelDetails(id);
    }, []);

    if (isFetching) {
        return <LoadingSpinner />;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
            <Box sx={{ width: '100%', mb: 3 }}>
                {channelDetails.isOnline ? (
                    <Stream streamUrl={channelDetails.streamUrl} />
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: 1 }}>
                        <Typography variant="h6">Channel is offline</Typography>
                    </Box>
                )}
                <ChannelDescription
                    channelId={channelDetails.id}
                    title={channelDetails.title}
                    description={channelDetails.description}
                    username={channelDetails.username}
                    getChannels={getChannels}
                />
            </Box>
            <Chat channelId={channelDetails.id} />
        </Box>
    );
};