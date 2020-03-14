import React from "react";
import {ReduxLoginForm} from "./loginForm";
import {connect} from "react-redux";
import {login} from "../MyRedux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = ({login, isAuth}) => {

    const onSubmit = (formData) => {
       login(formData.email, formData.password, formData.rememberMe)
    };

    if(isAuth) {
        return <Redirect to={ "/Profile" } />
    }

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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);