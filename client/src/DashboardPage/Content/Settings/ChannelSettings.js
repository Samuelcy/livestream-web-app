import React from 'react';
// import {StreamKey}from  "./Stream";
// import {ChannelSettings} from ''
import { avatarUrlValidationMessage, descriptionValidationMessage, titleValidationMessage, usernameValidationMessage } from "../../../shared/validators";

const inputs = [
    {
        field: "username",
        label: "Username",
        validationMessage: usernameValidationMessage,
        type: "text",
    },
    {
        field: "title",
        label: "Title",
        validationMessage: titleValidationMessage,
        type: "text",
    },
    {
        field: "avatarUrl",
        label: "Avatar Url",
        validationMessage: avatarUrlValidationMessage,
        type: "text",
    },
    {
        field: "description",
        label: "Descriptin",
        validationMessage: descriptionValidationMessage,
        type: "text",
        textarea: true,
    },
]

export const ChannelSettings = () => {
    return <form className="settings-form">


    </form>
};