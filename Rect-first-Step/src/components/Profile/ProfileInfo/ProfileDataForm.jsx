import React, {useState} from "react";
import cs from "./ProfileInfo.module.css"
import {Input, myCreateField, myTextarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button className={`btn btn-outline-primary ${cs.buttonMod}`}>
                    Save
                </button>
                {error && <div className={cs.formSummaryError}>{error}</div>}
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
                    {myCreateField(null, "lookingForAJob", "checkbox", null,
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

                <div className={cs.contacts}>
                    <b className={cs.profileB}> My Contacts: </b> {Object.keys(profile.contacts).map(key => {
                    return (
                        <div className={cs.contactsB} key={key}>
                            <b>key: {myCreateField(key,
                                "contacts." + key, "text", null, Input,)} </b>
                        </div>)
                })}
                </div>


            </div>


        </form>
    )
}


export const ProfileDataFormRedux = reduxForm({
    form: "edit-profile",
})(ProfileDataForm);