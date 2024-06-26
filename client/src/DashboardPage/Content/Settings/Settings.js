import React from "react";
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
    const { channelSettings, isFetching } = useChannelSettings();

    if (isFetching) {
        return <LoadingSpinner />
    }

    return (
        <div className="settings-container">
            <span>Settings </span >
            <ChannelSettings settings={channelSettings} />
            <PasswordSettings />
            <StreamKey streamKey={channelSettings.streamKey} />
        </div>
    );
}