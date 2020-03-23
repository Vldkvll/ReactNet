import React from "react";
import cs from "./FormControls.module.css";
import {Field} from "redux-form";

const FormControl = ({input, label, type, meta:{touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={cs.formControl + " " +
        (hasError
            ? cs.error
            : "")}>
            <div >{children}</div>

        </div>
    )
};

export const myTextarea = (props) => {
    const {input, meta, label, children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} placeholder={label} {...restProps} /></FormControl>
};

export const Input = (props) => {
    const {input, meta, label, children, ...restProps} = props;
    return <FormControl {...props}><input  {...input} placeholder={label}  {...restProps} /></FormControl>
};

export const myCreateField = (placeholder, name, type, label, component, validators, text="", ...props) => {
    return (
        <div >
            <Field
                placeholder={placeholder}
                   name={name}
                   type={type}
                   label={label}
                   component={component}
                   validate={validators}
                   {...props}
            />{text}
        </div>
    )
};