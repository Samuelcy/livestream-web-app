import React from "react";
import { ChannelCard } from "./ChannelCard";
import { useNavigate } from 'react-router-dom'

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

export const Channels = ({ channels }) => {
    // console.log(channels);

    const navigate = useNavigate();

    const handleNavigateToChannel = (id) => {
        navigate(`/channel/${id}`);
    }

    return <div className="channels-container">
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
    </div>
}