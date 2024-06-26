import React, { useState } from "react";
import { Logo } from "./Logo";
import { usernameValidationMessage, emailValidationMessage, passwordValidationMessage, passwordConfValidationMessage, validateEmail, validatePassword, validateUsername, validatePasswordConf } from "../shared/validators";
import { useRegister } from "../shared/hooks"
import { Input } from "../shared/components";

export const Register = ({ switchAuthHandler }) => {
    const { isLoading, register } = useRegister()

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
    }

    const handleRegister = (event) => {
        event.preventDefault();
        register(formState.email.value, formState.password.value, formState.username.value)
    }

    const isSubmitButtonDisabled = !formState.password.isValid ||
        !formState.email.isValid ||
        !formState.username.isValid ||
        formState.password.value !== formState.passwordConf.value || isLoading;

    return <div className="register-container">
        <Logo text={'Sign up to Stream'} />
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
                field='username'
                label='Username'
                value={formState.username.value}
                onChangeHandler={handleInputValueChange}
                type='text'
                onBlurHandler={handleInputValidatorOnBlur}
                showErrorMessage={formState.username.showError}
                validationMessage={usernameValidationMessage}
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
            <Input
                field='passwordConf'
                label='Password Confirmation'
                value={formState.passwordConf.value}
                onChangeHandler={handleInputValueChange}
                type='password'
                onBlurHandler={handleInputValidatorOnBlur}
                showErrorMessage={formState.passwordConf.showError}
                validationMessage={passwordConfValidationMessage}
            />
            <button
                onClick={handleRegister}
                disabled={
                    isSubmitButtonDisabled
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