import React from "react";
import cs from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../Utils/Validators/Validators";
import {myTextarea, renderField, Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength15 = maxLength(15);

const AddNewPostsForm = (props) => {
    // ("I'm clever & rich.")
    return (
       <form onSubmit={props.handleSubmit}>
                    <div>
                    <Field component={myTextarea}
                           type="text"
                           label="Please enter something beautiful"
                           name="newPostText"
                           validate={ [ required, maxLength15 ] } />
                    </div>
                    <div className={cs.buttons}>
                        <button className="btn btn-warning disabled">Add post</button>
                    </div>
            </form>
    );
};
export const HandlerMyPostsForm= reduxForm({
    form: "myPost",
})(AddNewPostsForm);

