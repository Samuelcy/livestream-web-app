import React from "react";

export const Login = ({ switchAuthHandler }) => {
    return <div className="login-container">
        <p>Logo</p>
        <form className="auth-form">
            Form
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
            Don't have an account? Please sign up
        </span>
    </div>
}