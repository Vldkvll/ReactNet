import React from "react";
import cs from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import Preloader from "../../Common/Preloader/Preloader";
// import photoAva from "../../../assets/images/aVaSummer.png"

const ProfileInfo = ({profile, ...props}) => {
    if (!profile){
        return <Preloader />;
    }
    let photoAva = 'https://cdn.pixabay.com/photo/2020/02/11/14/10/summer-4839685_960_720.png'

    // let profile = props.profile;

    return (
        <div>
            <div className={`${cs.item}`}>
                <div className={cs.ava}>
                    <img src ={ (profile && ((profile.photos.large != null) || (profile.photos.small != null)))
                        ? profile.photos.large || profile.photos.small
                        : photoAva }
                         alt="Profile ava"></img>
                </div>
                <div className={cs.profile}>
                    { !profile ? "" : profile.fullName}
                    <br/><br/>
                    { !profile ? "" : profile.aboutMe}
                    <br/><br/>
                    { !profile ? "" : profile.contacts.github}
                    <br/><br/>
                    { !profile ? "" : ` userId: ${profile.userId}`}
                </div>
                <div className={cs.profileStatus}>

                <div> <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /></div>
                </div>
            </div>

        </div>
    );
};

export default ProfileInfo;