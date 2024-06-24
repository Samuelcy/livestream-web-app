import React from "react";
import { StreamKey } from "./StreamKey";

const channelSettings = {
    title: "Title",
    description: "Description",
    avatarUrl: "none",
    username: "Martin",
    streamKey: "1234",
}

export const Settings = () => {
    return (
        <div className="settings-container">
            <span>Settings </span >
            <StreamKey streamKey={channelSettings.streamKey} />
        </div>
    );
}