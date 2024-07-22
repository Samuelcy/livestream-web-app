import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";
import { PasswordSettings } from "./PasswordSettings";
import { useChannelSettings } from "../../../shared/hooks";
import { LoadingSpinner } from "../../../shared/components";

const channelSettings = {
    title: "Title",
    description: "Description",
    avatarUrl: "none",
    username: "Martin",
    streamKey: "1234",
}

export const Settings = () => {
    const { channelSettings, isFetching, saveSettings } = useChannelSettings();

    if (isFetching) {
        return <LoadingSpinner />
    }

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Settings
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <ChannelSettings settings={channelSettings} saveSettings={saveSettings} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <PasswordSettings />
                </Grid>
            </Grid>
            <Box sx={{ marginTop: 4 }}>
                <StreamKey streamKey={channelSettings.streamKey} />
            </Box>
        </Box>
    );
}