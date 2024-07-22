import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import { useUserDetails } from "../../shared/hooks";
import logo from "../../resources/images/izumo_logo.png";

const NavLogo = () => {
    return (
        <IconButton edge="start" color="inherit" aria-label="logo">
            <img src={logo} alt="logo" style={{ height: '38px' }} />
        </IconButton>
    )
}

const NavButton = ({ text, onClickHandler, variant, color }) => {
    return (
        <Button variant={variant} color={color} onClick={onClickHandler} sx={{ marginLeft: 2 }}>
            {text}
        </Button>
    )
}

export const Nav = () => {
    const { isLogged, logout } = useUserDetails();
    const navigate = useNavigate();

    const handleNavigateToAuth = () => {
        navigate("/auth");
    };

    const handleNavigateToSettings = () => {
        navigate("/settings");
    };

    const handleNavigateToAuthChannels = () => {
        navigate("/channels");
    };

    const handleLogout = () => {
        logout();
    }

    return (
        <AppBar position="fixed" >
            <Toolbar>
                <NavLogo />
                <Box sx={{ flexGrow: 1 }} />
                <NavButton text="Browse" onClickHandler={handleNavigateToAuthChannels} variant="outlined" color="secondary" />
                {!isLogged ? (
                    <NavButton text="Login" onClickHandler={handleNavigateToAuth} color="secondary" variant="outlined" />
                ) : (
                    <>
                        <NavButton text="My Account" onClickHandler={handleNavigateToSettings} color="secondary" variant="outlined" />
                        <NavButton text="Logout" onClickHandler={handleLogout} color="secondary" variant="" />
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
};