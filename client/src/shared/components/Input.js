import React from "react";

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
}) => {
    // Accepting an event that gives an input , after every single change it will receive a new value
    // passing field to onChangeHandler
    const handleValueChange = (e) => {
        onChangeHandler(e.target.value, field)
    };

    const handleInputBlur = (e) => {
        onBlurHandler(e.target.value, field)
    };

    return (
        <>
            <div className='auth-form-label'>
                <span>{label}</span>
            </div>
            <input
                type={type}
                value={value}
                onChange={handleValueChange}
                onBlur={handleInputBlur}
            />
            <span className="auth-form-validation-message">
                {showErrorMessage && validationMessage}
            </span>
        </>
    )
}