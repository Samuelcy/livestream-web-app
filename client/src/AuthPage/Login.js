import React from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";

export const Login = ({ switchAuthHandler }) => {
    return <div className="login-container">
        <Logo text={'Login to Stream'} />
        <form className="auth-form">
            <AuthInput field='email' label='Email' />
            <AuthInput field='password' label='Password' />
            <button> Log In </button>
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
            Don't have an account? Please sign up
        </span>
    </div>
}