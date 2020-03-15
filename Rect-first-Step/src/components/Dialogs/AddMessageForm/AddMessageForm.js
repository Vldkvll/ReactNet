import cs from "../Dialogs.module.css";
import {Field} from "redux-form";
import React from "react";
import {renderField} from "../../Common/FormsControls/FormsControls";
import {maxLength, required} from "../../../Utils/Validators/Validators";


const maxLength50 = maxLength(50);

export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={` ${cs.TextButtons}`}>
                <Field component={renderField}
                       name="newMessageBody"
                       label="Enter your message"
                       validate={ [ required, maxLength50 ] }
                />
                <div className={cs.Buttons}>
                    <button className='btn btn-primary btn-sm'>Send</button>
                </div>
            </div>
        </form>
    )
};
