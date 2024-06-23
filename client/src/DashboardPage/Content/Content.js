import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channels } from "./Channels";

export const Content = () => {
    return <div className="content-container">
        <Routes>
            <Route path='settings' element={<div>Settings</div>} />
            <Route path='channels' element={<Channels />} />
            {/* Route for a specific channel by ID: /channel/1234 */}
            <Route path='channel/:id' element={<div>Channel</div>} />
        </Routes>
    </div>
}