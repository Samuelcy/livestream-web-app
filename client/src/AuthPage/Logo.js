import React from 'react';
import { Box, Typography } from '@mui/material';
import logoPlaceHolder from "../resources/images/izumo_logo.png";

export const Logo = ({ text }) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
            <Box
                component="img"
                src={logoPlaceHolder}
                alt="logo"
                sx={{ height: 60 }}
            />
            <Typography variant="body1" component="span" color="text.secondary" sx={{ mt: 1 }}>
                {text}
            </Typography>
        </Box>
    );
}

export default Logo; 