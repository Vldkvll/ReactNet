import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../MyRedux/State";

const Profile = (props) => {
    // props.addPost("I'm clever & rich.");
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.postData}
                     newPostText = {props.profilePage.newPostText}
                     dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;
