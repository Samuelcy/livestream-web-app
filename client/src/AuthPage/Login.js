import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from "../shared/validators";

export const Login = ({ switchAuthHandler }) => {
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

    return <div className="login-container">
        <Logo text={'Login to Stream'} />
        <form className="auth-form">
            <AuthInput
                field='email'
                label='Email'
                value={formState.email.value}
                onChangeHandler={handleInputValueChange}
                type='text'
                onBlurHandler={handleInputValidatorOnBlur}
                showErrorMessage={formState.email.showError}
                validationMessage={emailValidationMessage}
            />
            <AuthInput
                field='password'
                label='Password'
                value={formState.password.value}
                onChangeHandler={handleInputValueChange}
                type='password'
                onBlurHandler={handleInputValidatorOnBlur}
                showErrorMessage={formState.password.showError}
                validationMessage={passwordValidationMessage}
            />
            <button disabled={!formState.password.isValid || !formState.email.isValid}> Log In </button>
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
            Don't have an account? Please sign up
        </span>
    </div>
}