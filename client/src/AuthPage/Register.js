import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";
import { usernameValidationMessage, emailValidationMessage, passwordValidationMessage, passwordConfValidationMessage, validateEmail, validatePassword, validateUsername, validatePasswordConf } from "../shared/validators";

export const Register = ({ switchAuthHandler }) => {
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
            case 'username':
                isValid = validateUsername(value);
                break;
            case 'passwordConf':
                isValid = validatePasswordConf(formState.password.value,value);
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
    }

    return <div className="register-container">
        <Logo text={'Sign up to Stream'} />
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
                field='username'
                label='Username'
                value={formState.username.value}
                onChangeHandler={handleInputValueChange}
                type='text'
                onBlurHandler={handleInputValidatorOnBlur}
                showErrorMessage={formState.username.showError}
                validationMessage={usernameValidationMessage}
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
            <AuthInput
                field='passwordConf'
                label='Password Confirmation'
                value={formState.passwordConf.value}
                onChangeHandler={handleInputValueChange}
                type='password'
                onBlurHandler={handleInputValidatorOnBlur}
                showErrorMessage={formState.passwordConf.showError}
                validationMessage={passwordConfValidationMessage}
            />
            <button disabled={!formState.password.isValid ||
                !formState.email.isValid ||
                !formState.username.isValid ||
                formState.password.value !== formState.passwordConf.value
            }
            >
                Register
            </button>
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
            Already have an account? Sign in
        </span>
    </div>
}