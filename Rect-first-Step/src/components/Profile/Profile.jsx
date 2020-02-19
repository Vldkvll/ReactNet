import React from "react";
import cs from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts/Posts";

const Profile = (props) => {
    let postsElements = props.postsElements.map(postElem =>(<Posts messenger={postElem.messenger} likesCount={postElem.likesCount}/>))
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsElements={postsElements}/>
        </div>
    );
};

export default Profile;
