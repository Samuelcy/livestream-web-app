import React from "react";
import { Logo } from "./Logo";

export const Login = ({ switchAuthHandler }) => {
    return <div className="login-container">
        <Logo text={'Login to Stream'} />
        <form className="auth-form">
            Form
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
            Don't have an account? Please sign up
        </span>
    </div>
}