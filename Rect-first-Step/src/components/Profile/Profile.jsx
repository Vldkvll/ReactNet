import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div >
            <ProfileInfo profile={props.profileFromState}
                         savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         status={props.statusFromState}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer/>

        </div>
    );
};

export default Profile;









