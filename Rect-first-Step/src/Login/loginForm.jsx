import React from "react";
import {reduxForm} from "redux-form";
import {maxLength, required} from "../Utils/Validators/Validators";
import cs from "../components/Common/FormsControls/FormControls.module.css";
import {Input, myCreateField} from "../components/Common/FormsControls/FormsControls";

const maxLength20 = maxLength(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            {myCreateField("Email", "email",
                "text", "login", Input, [required, maxLength20])}
            {myCreateField("Password", "password",
                "password", "password", Input, [required, maxLength20])}
            {myCreateField(null, "rememberMe", "checkbox", null,
                Input, null, "remember me")}

            {props.error && <div className={cs.formSummaryError}>{props.error}</div>}
            <div>
                <button className={`"btn btn-secondary`}>Submit Login</button>
            </div>
        </form>
    )
};

export const ReduxLoginForm = reduxForm({
    form: "login",
})(LoginForm);
