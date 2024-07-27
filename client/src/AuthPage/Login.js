import React, { useState } from "react";
import { Logo } from "./Logo";
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from "../shared/validators";
import { useLogin } from "../shared/hooks/useLogin";
import { TextField, Button, Typography, Box } from "@mui/material";

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false,
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        }
    });

    // update the state of a specific form field (either "email" or "password") whenever its value change
    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            }
        }));
    };

    const handleInputValidatorOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;
            default:
        }

        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            }
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault(); // Prevents refresh
        login(formState.email.value, formState.password.value);
    };

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid;

    return (
        <Box sx={{ textAlign: 'center', maxWidth: 400, margin: 'auto', backgroundColor: 'background.default', p: 4 }}>
            <Logo text={'Login to Stream'} />
            <form onSubmit={handleLogin}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formState.email.value}
                    onChange={(e) => handleInputValueChange(e.target.value, 'email')}
                    onBlur={(e) => handleInputValidatorOnBlur(e.target.value, 'email')}
                    error={formState.email.showError}
                    helperText={formState.email.showError && emailValidationMessage}
                    margin="normal"
                    variant="outlined"
                    size="small"
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formState.password.value}
                    onChange={(e) => handleInputValueChange(e.target.value, 'password')}
                    onBlur={(e) => handleInputValidatorOnBlur(e.target.value, 'password')}
                    error={formState.password.showError}
                    helperText={formState.password.showError && passwordValidationMessage}
                    margin="normal"
                    variant="outlined"
                    size="small"
                />
                <Button
                    type="submit"
                    variant="outlined"
                    color="secondary"
                    disabled={isSubmitButtonDisabled}
                    sx={{ mt: 2, width: '100%' }}
                >
                    {isLoading ? 'Logging in...' : 'Log in'}
                </Button>
            </form>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Don't have an account?{' '}
                <Button variant="text" color="primary" onClick={switchAuthHandler}>
                    Please sign up
                </Button>
            </Typography>
        </Box>
    );
};