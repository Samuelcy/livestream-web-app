import React from "react";
import { TextField } from "@mui/material";

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
}) => {
    // Accepting an event that gives an input , after every single change it will receive a new value
    // passing field to onChangeHandler
    const handleValueChange = (e) => {
        onChangeHandler(e.target.value, field);
    };

    const handleInputBlur = (e) => {
        onBlurHandler(e.target.value, field);
    };

    return (
        <TextField
            label={label}
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
            error={showErrorMessage}
            helperText={showErrorMessage ? validationMessage : ""}
            type={type}
            multiline={textarea}
            rows={textarea ? 5 : 1}
            fullWidth
            variant="outlined"
            margin="normal"
        />
    );
};