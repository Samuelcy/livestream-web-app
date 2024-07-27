import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { useChannels, useUserDetails } from "../shared/hooks";
import { LoadingSpinner } from "../shared/components";
import { connectWithSocketServer } from "../socketConn";
import { Box, Grid } from "@mui/material";
import "./dashboardPage.css";

export const DashboardPage = () => {
    const { getChannels, isFetching, followedChannels, allChannels } =
        useChannels();
    const { isLogged } = useUserDetails();

    useEffect(() => {
        getChannels(isLogged);
        connectWithSocketServer();
    }, []);

    if (isFetching) {
        return <LoadingSpinner />;
    }

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'background.default', color: 'text.primary' }}>
            <Nav />
            <Grid container sx={{ flex: 1 }}>
                <Grid item xs={2}>
                    <Sidebar channels={followedChannels} />
                </Grid>
                <Grid item xs={10} sx={{ overflowY: 'auto', maxHeight: '100vh' }}>
                    <Content channels={allChannels} getChannels={getChannels} />
                </Grid>
            </Grid>
        </Box>
    );
};