import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";

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

    return <div className="login-container">
        <Logo text={'Login to Stream'} />
        <form className="auth-form">
            <AuthInput field='email' label='Email' value={formState.email.value} onChangeHandler={handleInputValueChange}/>
            <AuthInput field='password' label='Password' value={formState.password.value} onChangeHandler={handleInputValueChange} />
            <button> Log In </button>
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
            Don't have an account? Please sign up
        </span>
    </div>
}