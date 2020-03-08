import React from "react";
import cs from "./FormControls.module.css";

export const renderField = ({input, label, type, meta: {touched, error, warning}}) => {
    const hasError = touched && error;
    return (
    <div>
        {/*<label>{label}</label>*/}
        <div className={cs.formControl + " " + (hasError ? cs.error : "")}>
            <textarea {...input} placeholder={label} type={type}/>
            {/*{touched && ((error && <div className={cs.formControl}>{error}</div>) || (warning && <div>{warning}</div>))}*/}
        </div>
    </div>
)};

// export const Input = ({input, meta, ...props}) => {
// //     const hasError = meta.touched && meta.error;
// //     return (
// //         <div className={cs.formControl}>
// //             <div>
// //                 <input {...input} {...props} />
// //             </div>
// //             { hasError && <span>{meta.error}</span>}
// //         </div>
// //     )
// // };

export const Input = ({input, label, type, meta: {touched, error, warning}}) => {

const hasError = touched && error;
return (
    <div>
        {/*<label>{label}</label>*/}
       <div className={cs.formControl + " " + (hasError ? cs.error : "")}>
            <input {...input} placeholder={label} type={type}/>
            {/*{touched && ((error && <div className={cs.formControl}>{error}</div>) || (warning && <div>{warning}</div>))}*/}
        </div>
    </div>
)};