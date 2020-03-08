import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/Common/FormsControls/FormsControls";
import {maxLength, required} from "../Utils/Validators/Validators";
import cs from "../components/Common/FormsControls/FormControls.module.css";

const maxLength20 = maxLength(20);

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Email"
                           name="email"
                           type="text"
                           label="login"
                           component={Input}
                           validate={[ required, maxLength20 ]}
                    />
                </div>
                <div>
                    <Field placeholder="Password"
                           name="password"
                           type="password"
                           label="password"
                           component={Input}
                           validate={[ required, maxLength20 ]}
                    />
                </div>
                <div>
                    <Field type="checkbox" name="rememberMe" component="input" /> remember me
                </div>
                { props.error && <div className={cs.formSummaryError}>{props.error}</div>
                }
                <div>
                    <button>Submit Login</button>
                </div>
            </form>
    )
};

export const ReduxLoginForm = reduxForm({
    form: "login",
})(LoginForm);