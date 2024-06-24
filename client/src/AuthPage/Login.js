import React, { useState } from "react";
import { Logo } from "./Logo";
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from "../shared/validators";
import { useLogin } from "../shared/hooks/useLogin";
import { Input } from "../shared/components";

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin()

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
    })

    // update the state of a specific form field (either "email" or "password") whenever its value change
    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            }
        }));
    }

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
    }

    const handleLogin = (event) => {
        event.preventDefault(); // Prevents refresh

        login(formState.email.value, formState.password.value);
    };

    const isSubmitButtonDisabled =
        isLoading || !formState.password.isValid || !formState.email.isValid;

    return <div className="login-container">
        <Logo text={'Login to Stream'} />
        <form className="auth-form">
            <Input
                field='email'
                label='Email'
                value={formState.email.value}
                onChangeHandler={handleInputValueChange}
                type='text'
                onBlurHandler={handleInputValidatorOnBlur}
                showErrorMessage={formState.email.showError}
                validationMessage={emailValidationMessage}
            />
            <Input
                field='password'
                label='Password'
                value={formState.password.value}
                onChangeHandler={handleInputValueChange}
                type='password'
                onBlurHandler={handleInputValidatorOnBlur}
                showErrorMessage={formState.password.showError}
                validationMessage={passwordValidationMessage}
            />
            <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                Log in
            </button>
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
            Don't have an account? Please sign up
        </span>
    </div>
}