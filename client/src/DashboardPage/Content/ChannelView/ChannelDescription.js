import React from "react";
import { useUserDetails, useFollowChannel, useCheckFollowing } from "../../../shared/hooks";

const FollowButton = ({ channelId, getChannels, isFollowed }) => {
    const { followChannel } = useFollowChannel();

    const handleFollowChannel = () => {
        followChannel(channelId, getChannels);
    };

    return (
        <button onClick={handleFollowChannel} className="channel-follow-button" disabled={isFollowed}>
            {isFollowed ? "Following" : "Follow"}
        </button>
    );
};

export const ChannelDescription = ({
    username,
    title,
    description,
    channelId,
    getChannels,
    followedChannels,
}) => {
    const { isLogged } = useUserDetails();
    const isChannelFollowed = useCheckFollowing(followedChannels, channelId);

    return (
        <div className="channel-description-container">
            <span className="channel-description-title">{username}</span>
            <span>
                {isLogged && (
                    <FollowButton
                        className="channel-follow-button"
                        channelId={channelId}
                        getChannels={getChannels}
                        isFollowed={isChannelFollowed}
                    />
                )}
            </span>
            <span className="channel-description-subtitle">{title}</span>
            <div className="channel-description-box">
                <span className="channel-description">{description}</span>
            </div>
        </div>
    );
};
