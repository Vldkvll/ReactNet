import React, {useState} from "react";
import cs from "./ProfileInfo.module.css"
import {Input, myCreateField, myTextarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm =({handleSubmit}) => {
    return (
    <form onSubmit={handleSubmit}>
        <div>
            <button className={`btn btn-outline-primary ${cs.buttonMod}`}>
                Save
            </button>
        </div>

        <div className={cs.profile}>
            <b className={cs.profileB}> Personality:</b>
            <div>
                <b className={cs.contactTitle}>Name - </b>
                {myCreateField("Full Name",
                    "fullName", "text", null, Input,)}
            </div>
            <div>
                <b className={cs.contactTitle}>Looking for a Job?</b>
               { myCreateField(null, "lookingForAJob", "checkbox", null,
                Input, null, "")}
            </div>
            <div>
                <b className={cs.contactTitle}> My professional skills: </b>
                {myCreateField("Looking for a Job descriptions",
                    "lookingForAJobDescription", "text", null, myTextarea,)}
            {/*React, React-Redux, Redux-Form, React-Router, JS, Python, HTML, CSS, Git, English-Intermediate*/}
            </div>
            <div>
                <b className={cs.contactTitle}> About Me: </b>
                {myCreateField("About Me",
                    "aboutMe", "text", null, myTextarea,)}
                {/*Intelligent, Kind, Hard-Working employee*/}
            </div>


            {/*<div><b className={cs.contactTitle}>User Id: </b>*/}
            {/*    {!profile*/}
            {/*    ? ""*/}
            {/*    : `${profile.userId}`}*/}
            {/*</div>*/}


        </div>


    </form>
    )
}


export const ProfileDataFormRedux= reduxForm({
    form: "edit-profile",
})(ProfileDataForm);