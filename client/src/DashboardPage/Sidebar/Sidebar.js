import React from "react";
import { useNavigate } from 'react-router-dom';

// const followedChannels = [
//     {
//         id: 1,
//         username: 'Martin',
//         isOnline: false,
//     },
//     {
//         id: 2,
//         username: 'Marta',
//         isOnline: true,
//     },
//     {
//         id: 3,
//         username: 'Jack',
//         isOnline: false,
//     },

// ]

export const Sidebar = ({ channels }) => {

    const navigate = useNavigate();

    const handleNavigateToChannel = (id) => {
        navigate(`/channel/${id}`);
    }

    // Returns empty sidebar if user isn't following channesl
    if (!channels) {
        return null;
    }

    return <div className="sidebar-container">
        <span className="sidebar-title">For you</span>
        <span className="sidebar-subtitle">FOLLOWED CHANNELS</span>
        {channels?.map((channel) => {
            return (
                <div key={channel.id} className='sidebar-list-item' onClick={() => handleNavigateToChannel(channel.id)}>
                    <span className="sidebar-list-username">{channel.username}</span>
                    <span className="sidebar-list-status" style={{ color: channel.isOnline ? 'green' : 'red' }}>{channel.isOnline ? "Online" : "Offline"}</span>
                </div>
            );
        })}
    </div>
}