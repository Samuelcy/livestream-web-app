import React, { useState } from "react";
import { Logo } from "./Logo";
import { usernameValidationMessage, emailValidationMessage, passwordValidationMessage, passwordConfValidationMessage, validateEmail, validatePassword, validateUsername, validatePasswordConf } from "../shared/validators";
import { useRegister } from "../shared/hooks";
import { TextField, Button, Box, Typography } from "@mui/material";

export const Register = ({ switchAuthHandler }) => {
    const { isLoading, register } = useRegister();

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
        },
        username: {
            value: '',
            isValid: false,
            showError: false,
        },
        passwordConf: {
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
            case 'username':
                isValid = validateUsername(value);
                break;
            case 'passwordConf':
                isValid = validatePasswordConf(formState.password.value, value);
                break;
            default:
                break;
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

    const handleRegister = (event) => {
        event.preventDefault();
        register(formState.email.value, formState.password.value, formState.username.value);
    };

    const isSubmitButtonDisabled = !formState.password.isValid ||
        !formState.email.isValid ||
        !formState.username.isValid ||
        formState.password.value !== formState.passwordConf.value || isLoading;

    return (
        <Box sx={{ textAlign: 'center', maxWidth: 400, margin: 'auto', backgroundColor: 'background.default', p: 4 }}>
            <Box mb={3}>
                <Logo text={'Sign up to Stream'} />
            </Box>
            <form onSubmit={handleRegister}>
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
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    value={formState.username.value}
                    onChange={(e) => handleInputValueChange(e.target.value, 'username')}
                    onBlur={(e) => handleInputValidatorOnBlur(e.target.value, 'username')}
                    error={formState.username.showError}
                    helperText={formState.username.showError && usernameValidationMessage}
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
                <TextField
                    fullWidth
                    id="passwordConf"
                    name="passwordConf"
                    label="Password Confirmation"
                    type="password"
                    value={formState.passwordConf.value}
                    onChange={(e) => handleInputValueChange(e.target.value, 'passwordConf')}
                    onBlur={(e) => handleInputValidatorOnBlur(e.target.value, 'passwordConf')}
                    error={formState.passwordConf.showError}
                    helperText={formState.passwordConf.showError && passwordConfValidationMessage}
                    margin="normal"
                    variant="outlined"
                    size="small"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitButtonDisabled}
                    sx={{ mt: 3, width: '100%' }}
                >
                    {isLoading ? 'Registering...' : 'Register'}
                </Button>
            </form>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Already have an account?{' '}
                <Button variant="text" color="primary" onClick={switchAuthHandler}>
                    Sign in
                </Button>
            </Typography>
        </Box>
    );
};