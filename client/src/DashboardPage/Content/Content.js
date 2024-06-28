import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channels } from "./Channels";
import { ChannelView } from "./ChannelView";
import { Settings } from "./Settings";

export const Content = ({ channels, getChannels, followedChannels }) => {
    return <div className="content-container">
        <Routes>
            <Route path='settings' element={<Settings />} />
            <Route path='channels' element={<Channels channels={channels} />} />
            {/* Route for a specific channel by ID: /channel/1234 */}
            <Route path='channel/:id' element={<ChannelView getChannels={getChannels} followedChannels={followedChannels} />} />
        </Routes>
    </div>
}