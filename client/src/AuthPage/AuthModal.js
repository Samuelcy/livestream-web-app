import React from "react";
import { Modal, Box, Button } from "@mui/material";
import { Login } from "./Login";

const AuthModal = ({ isOpen, onClose }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 500,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 16,
                }}
            >
                <Login switchAuthHandler={onClose} />
            </Box>
        </Modal>
    );
};

export default AuthModal;