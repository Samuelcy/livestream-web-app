import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Box } from "@mui/material";
import "./authPage.css";

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    // Handler to help if isLogin is T/F
    const handleAuthPageToggle = () => {
        setIsLogin((prev) => !prev);
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Adjust height as needed
                backgroundColor: 'background.paper'
            }}
        >
            <Box
                sx={{
                    width: "500px", // Adjust width as needed
                }}
            >
                {isLogin ? (
                    <Login switchAuthHandler={handleAuthPageToggle} />
                ) : (
                    <Register switchAuthHandler={handleAuthPageToggle} />
                )}
            </Box>
        </Box>
    );
};