import React from 'react';

const imageUrl = 'https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs='

const ChannelAvatar = ({ url }) => {
    return (
        <div className="channels-avatar-container">
            <img src={url || imageUrl} widht="100%" height="100%" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler,
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return <div className="channels-card" onClick={handleNavigate} >
        <ChannelAvatar url={avatarUrl} />
        <span className="channels-card-title">{title}</span>
        <span className="channels-card-text">{username}</span>
        <span className="channels-card-text"
            style={{ color: isOnline ? 'green' : 'red' }}
        >{isOnline ? "Online" : "Offline"}</span>
    </div>
};