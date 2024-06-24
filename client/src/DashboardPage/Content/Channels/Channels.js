import React from "react";
import { ChannelCard } from "./ChannelCard";

export const dummyChannels = [
    {
        id: 1,
        title: 'test',
        avatarUrl: null,
        username: 'Martin',
        isOnline: false,
    },
    {
        id: 2,
        title: 'test',
        avatarUrl: null,
        username: 'Martin',
        isOnline: false,
    },
    {
        id: 3,
        title: 'test',
        avatarUrl: null,
        username: 'Martin',
        isOnline: false,
    },
    {
        id: 4,
        title: 'test',
        avatarUrl: null,
        username: 'Martin',
        isOnline: false,
    },
]

export const Channels = () => {
    return <div className="channels-container">
        {dummyChannels.map(channel => (
            <ChannelCard
                key={channel.id}
                title={channel.title}
                username={channel.username}
                isOnline={channel.isOnline}
                avatarUrl={channel.avatarUrl}
                navigateToChannelHandler={() => { }}
            />
        ))}
    </div>
}