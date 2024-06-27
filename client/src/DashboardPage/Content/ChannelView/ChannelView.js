import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails } from "../../../shared/hooks";
import { LoadingSpinner } from "../../../shared/components";

// const channelDetails = {
//     id: 1,
//     title: 'Gaming Channel',
//     description: "Playing a game",
//     username: "Gamer",
//     isOnline: false,
// }

export const ChannelView = () => {
    const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();

    // id from URL
    const { id } = useParams();

    useEffect(() => {
        getChannelDetails(id);
    }, [])

    if (isFetching) {
        return <LoadingSpinner />
    }

    return (
        <div className="channel-container">
            <div className="channel-video-description-section">
                <div className="channel-offline-placeholder">
                    <span>Channel is offline</span>
                </div>
                <ChannelDescription
                    channelId={channelDetails.id}
                    title={channelDetails.title}
                    description={channelDetails.description}
                    username={channelDetails.username}
                />
            </div>
            <Chat />
        </div>
    )
};