import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channels } from "./Channels";
import { ChannelView } from "./ChannelView";
import { Settings } from "./Settings";
import { Box } from "@mui/material";

export const Content = ({ channels, getChannels }) => {
    return (
        <Box sx={{ marginTop: 9, padding: 2, flexGrow: 1, overflowY: 'auto' }}>
            <Routes>
                <Route path='settings' element={<Settings />} />
                <Route path='channels' element={<Channels channels={channels} />} />
                {/* Route for a specific channel by ID: /channel/1234 */}
                <Route path='channel/:id' element={<ChannelView getChannels={getChannels} />} />
            </Routes>
        </Box>
    );
};