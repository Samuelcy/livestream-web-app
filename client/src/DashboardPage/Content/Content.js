import React from "react";
import { Route, Routes } from "react-router-dom";

export const Content = () => {
    return <div className="content-container">
        <Routes>
            <Route path='settings' element={<div>Settings</div>} />
            <Route path='channels' element={<div>Channels</div>} />
            {/* Route for a specific channel by ID: /channel/1234 */}
            <Route path='channel/:id' element={<div>Channel</div>} />
        </Routes>
    </div>
}