import React from "react";
import {ReduxLoginForm} from "./loginForm";

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    };

    return (
        <>
            <div>
                <h1>
                    LOGIN
                </h1>
                <ReduxLoginForm onSubmit={onSubmit} />
            </div>
        </>
    )
};

export default Login;